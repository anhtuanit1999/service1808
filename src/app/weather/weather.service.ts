import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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

    getName(): Promise<string> {
        const url = 'http://localhost:3000';
        return this.http.get(url)
        .toPromise()
        .then(res => res.json())
        .then(resJSON => resJSON.name);
    }

    addWord() {
        const url = 'http://localhost:3000/word';
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const body = { en: 'abcd', vn: 'efghik' };
        return this.http.post(url, JSON.stringify(body), { headers })
        .toPromise()
        .then(res => res.json());
    }
}
