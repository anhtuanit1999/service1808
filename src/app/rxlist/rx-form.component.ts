import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-rx-form',
  template: `
      <input placeholder="English" [(ngModel)]="txtEn" class="form-control">
      <br>
      <input placeholder="Vietnamese" [(ngModel)]="txtVn" class="form-control">
      <br>
      <button class="btn btn-success" style="width: 220px" (click)="add();">
        Add new word
      </button>
  `
})

export class RxFormComponent {
  txtEn = '';
  txtVn = '';
  constructor(private store: Store<any>) {}

  add() {
    this.store.dispatch({
      type: 'ADD_WORD',
      payload: {
        en: this.txtEn,
        vn: this.txtVn,
        _id: Math.random() + ''
      }
    });
    this.txtEn = '';
    this.txtVn = '';
    this.store.dispatch({ type: 'TOGGLE_IS_SHOW_FORM' });
  }
}
