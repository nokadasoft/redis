import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, filter, switchMap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-angular';

  prefixNode = "/node";
  prefixCore = "/core";

  valueNode: number;
  valueCore: number;
  
  constructor(private http: HttpClient) { }
 
  read(prefix: String): void {
    console.log(prefix);

    this.http.get(prefix + '/api/redis').pipe(
      map(data => { 
        console.log('data: ' + data);
        if (prefix === '/node') {
          this.valueNode = +data;
        } else {
          this.valueCore = +data;
        }
      })
    ).subscribe();
  }

  increment(prefix: String): void {
    this.http.put(prefix + '/api/redis', "", httpOptions).subscribe();
  }

  reset(prefix: String): void {
    this.http.delete(prefix + '/api/redis', httpOptions).subscribe();
  }


    // module.exports = function(app) {
    //   app.use(proxy('/vnode', { target: 'http://backend_nodejs_service:' + process.env.REACT_APP_PORT_BACKEND_NODEJS + '/', pathRewrite: {'^/vnode/':'/'} }));
    //   app.use(proxy('/vcore', { target: 'http://backend_corecs_service:' + process.env.REACT_APP_PORT_BACKEND_CORECS + '/', pathRewrite: {'^/vcore/':'/'} }));
    // }
    //this.http.get(url).map(res => res.json());

  // getHero(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get<Hero>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Hero>(`getHero id=${id}`))
  //   );
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

}
