import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-rx-word',
  template: `
    <div class="word">
      <h3>{{ en }}</h3>
      <p>{{ vn }}</p>
      <button class="btn btn-danger" (click)="remove()">Remove</button>
    </div>
  `,
  styles: [`
      .word {
        display: flex;
        flex-direction: column;
        background-color: #EFEEF6;
        padding: 10px;
        margin: 10px 0px 0px 0px;
        border-radius: 5px;
      }
  `]
})

export class RxWordComponent {
    @Input() vn: string;
    @Input() en: string;
    @Input() _id: string;
    constructor(private store: Store<any>) {}
    remove() {
        this.store.dispatch({ type: 'REMOVE_WORD', payload: { _id: this._id } });
    }
}
