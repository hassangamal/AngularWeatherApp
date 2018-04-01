import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  location = {
    city:  'london',
    code : 'uk'
  };
  weather:any;
  value:any;
  constructor(private weatherService:WeatherService) { }

  ngOnInit() { 
    this.value = localStorage.getItem('location');

  if (this.value!=null){
      this.location=JSON.parse(this.value);
  }else {
    this.location={
      city:'london',
      code:'uk'

    }
  }
    this.weatherService.getWeather(this.location.city, this.location.code).subscribe(
      response => {
        console.log(response);
        this.weather=response;
      }
    );
  }

}
