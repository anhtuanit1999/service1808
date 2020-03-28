import { Component } from '@angular/core';
import { IpService } from './ip.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IpService]
})
export class AppComponent {
  title = 'app';
  ip: string;
  constructor(private ipService: IpService) {
    this.ipService.getIp()
    .then(ip => this.ip = ip)
    .catch(err => console.log(err.message));
  }
}
