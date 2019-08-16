# docker-frontend-backend
This repository contains 4 projects to be deployed into separate docker containers via included docker-compose yaml file.


### backend-code (port: 8002)
Set of 3 RESTful endpoints implemented in .net core served as a backend to the frontend projects.

### backend-node (port: 8001)
Set of 3 RESTful endpoints implemented in nodeJS served as a backend to the frontend projects.

### frontend-react (port: 3000)
UI implemented in React.js to consume both backend services.

### frontend-angular (port: 4200)
UI implemented in Angular to consume both backend services.

### redis (port: 6379)
Deployed into 5th container to be used as data storage for both backend services.


----
## usage

Clone the repo locally. Ensure the environment has docker and docker compose installed.
Run *docker-compose up -d* in the root folder of the repository.

When containers are up and running the both frontends will be available as follows:  
- localhost:3000 // react  
- localhost:4200 // angular

#### Other usefull docker-compose commands:
| command | description |
| ------ | ------ |
| docker-compose up | Builds, (re)creates, starts, and attaches to containers for a service |
|  docker-compose down | Stops containers and removes containers, networks, volumes, and images created by up |
|  docker-compose start | Starts existing containers for a service |
|  docker-compose stop | Stops running containers without removing them. They can be started again with docker-compose start |
|  docker-compose rm | Removes stopped service containers |

---
##### To see created docker components:
docker ps (docker ps -a)         : for containers
docker images (docker images -a) : for images
