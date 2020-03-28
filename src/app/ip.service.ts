import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()

export class IpService {
    constructor(private http: Http) {}

    getIp(): Promise<string> {
        return this.http.get('https://ipfind.co/?ip=118.71.170.51&auth=98d17991-a206-4f7a-bb56-b90818dde335')
        .toPromise()
        .then(res => res.json())
        .then(resJSON => resJSON.ip_address);
    }
}
