import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class WordService {
    constructor(private http: Http) { }

    getWords(): Promise<Word[]> {
        const url = 'http://localhost:3000/words';
        return this.http.get(url)
            .toPromise()
            .then(res => res.json());
    }

    removeWord(id: string): Promise<Word> {
        const url = 'http://localhost:3000/word/';
        return this.http.delete(url + id)
        .toPromise()
        .then(res => res.json());
    }

    addWord(en: string, vn: string): Promise<Word> {
        const url = 'http://localhost:3000/word/';
        const body = JSON.stringify({ en, vn });
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json());
    }
}

interface Word {
    en: string;
    vn: string;
    _id: string;
}
