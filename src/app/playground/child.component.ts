import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-child',
  template: `
      <div>
          <button (click)="incr()">Increment</button>
          <button (click)="desc()">Descrement</button>
      </div>
  `
})

export class ChildComponent {
    constructor(private store: Store<any>) {}

    incr(): void {
        this.store.dispatch({ type: 'INCREMENT' });
    }

    desc(): void {
        this.store.dispatch({ type: 'DESCREMENT' });
    }
}

// store - thay doi


