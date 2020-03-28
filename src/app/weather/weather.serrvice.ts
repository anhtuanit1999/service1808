import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class WeatherService {
    constructor(private http: Http) {}
    getWeather(cityName: string): Promise<string> {
        const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
        return this.http.get(url + cityName)
        .toPromise()
        .then(res => res.json())
        .then(resJSON => resJSON.main.temp);
    }
}