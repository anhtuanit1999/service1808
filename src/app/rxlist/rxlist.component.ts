import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-rx-list',
  templateUrl: './rxlist.component.html'
})

export class RxListComponent {
  words: Observable<Word[]>;
  isShowForm: Observable<boolean>;
  constructor(private store: Store<any>) {
    this.words = this.store.select('words');
    this.isShowForm = this.store.select('isShowForm');
  }

  showForm() {
    this.store.dispatch({ type: 'TOGGLE_IS_SHOW_FORM' });
  }
}

const WORD: Word[] = [
  {
    '_id': '59f08ff476ab40f4a22b5fa0',
    'en': 'activity',
    'vn': 'hoạt động'
  },
  {
    '_id': '59f08ff476ab40f4a22b5fa1',
    'en': 'active',
    'vn': 'chủ động'
  },
  {
    '_id': '59f08ff476ab40f4a22b5fa3',
    'en': 'bedroom',
    'vn': 'phòng ngủ'
  },
  {
    '_id': '59f32e87bc87844a532224b3',
    'en': 'new',
    'vn': 'mới'
  }
];

interface Word {
  en: string;
  vn: string;
  _id: string;
}
