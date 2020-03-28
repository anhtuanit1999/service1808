import { Component, OnInit } from '@angular/core';
import { WordService } from './word.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [WordService]
})

export class ListComponent implements OnInit {
  words: Word[] = [];
  txtEn = '';
  txtVn = '';
  constructor(private wordService: WordService) {}

  ngOnInit() {
    this.wordService.getWords()
    .then(words => this.words = words);
  }

  remove(id) {
    this.wordService.removeWord(id)
    .then(removedWord => {
      const index = this.words.findIndex(word => word._id === removedWord._id);
      this.words.splice(index, 1);
    })
    .catch(err => console.log(err.message));
  }

  add() {
    this.wordService.addWord(this.txtEn, this.txtVn)
    .then(word => this.words.push(word))
    .catch(err => console.log(err));
    this.txtEn = '';
    this.txtVn = '';
  }
}

interface Word {
  en: string;
  vn: string;
  _id: string;
}
