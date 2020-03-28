import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent {
  txtCityName = '';
  cityName = '';
  temp = '';
  constructor(private weatherSerice: WeatherService) {
    weatherSerice.addWord()
    .then(res => console.log(res));
  }

  async onGetWeather() {
    try {
      const temp = await this.weatherSerice.getWeather(this.txtCityName);
      this.temp = temp;
      this.cityName = this.txtCityName;
      this.txtCityName = '';
    } catch (err) {
      const errJSON = await (<Response>err).json();
      alert(errJSON.message);
    }
  }

  get message() {
    if (this.cityName === '') return 'Enter your city name';
    return `${this.cityName} is now ${this.temp}C`;
  }
}

// http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=
