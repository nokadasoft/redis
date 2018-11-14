var express = require("express");
var app = express();

var redis = require('redis'),
    redisClient = redis.createClient();

redisClient.on("error", function (err) {
    console.log("RedisError " + err);
});

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT,    PATCH, DELETE');
    
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Pass to next layer of middleware
    next();
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});

app.get("/names", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.get("/redisInc", (req, res, next) => {
    redisClient.incr("someString", function () {
        console.log("after incr");
        res.json("OK"); 
    });
});

app.get("/redisReset", (req, res, next) => {
    redisClient.set("someString", "0", function () {
        console.log("after set");
        res.json("OK"); 
    });
});

app.get("/redisGet", (req, res, next) => {
    redisClient.get("someString", function (err, v) {
        console.log("after get " + err + " - " + v);
        res.json(v);
    });
});
