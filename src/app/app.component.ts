import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ip: string;
  constructor(private http: Http) {
    this.http.get('https://ipfind.co/?ip=118.71.170.51&auth=98d17991-a206-4f7a-bb56-b90818dde335')
    .toPromise()
    .then(res => res.json())
    .then(resJSON => this.ip = resJSON.ip_address)
    .catch(err => console.log(err.message));
  }
}
