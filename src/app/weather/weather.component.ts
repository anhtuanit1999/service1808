import { Component } from '@angular/core';
import { WeatherService } from './weather.serrvice';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent {
  txtCityName = '';
  txtMessage = '';
  constructor(private weatherService: WeatherService) {}

  async onGetWeather() {
    try {
      const temp = await this.weatherService.getWeather(this.txtCityName)
      this.txtMessage = `${this.txtCityName} is now ${temp}C`;
      this.txtCityName = '';
    } catch (error) {
      this.txtMessage = 'City name invalid!';
      this.txtCityName = '';
    }
  }

  get message() {
    if (this.txtMessage === '') {
      return 'Enter your city name';
    }
    return this.txtMessage;
  }


}
// http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=