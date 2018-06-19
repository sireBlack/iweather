import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apikey = '99dfe35fcb7de1ee';
  url;
  constructor(public http: HttpClient) {
    this.url = 'http://api.wunderground.com/api/'+this.apikey+'/conditions/q';

  }

  getWeather(city, state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json').map(res => res).pipe(tap(this.extractData));
  }

  private extractData(res: Response){
    return res || [];
  }


}
