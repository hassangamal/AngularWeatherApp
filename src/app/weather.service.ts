import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherService {

  apiKey='16e82e4c9094ea19bc712c87b52eacc4';
  url;
  constructor(private http:Http) { 
    this.url='http://api.openweathermap.org/data/2.5/forecast?q=';
  }
  getWeather(city,code)
  {
    return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey).map( res => res.json());

  }

}
