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
    this.ip = this.ipService.getIp();
  }
}
