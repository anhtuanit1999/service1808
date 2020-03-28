import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// async pipe

@Component({
  selector: 'app-parent',
  template: `
      <div style="padding: 10px">
        <p>{{ value | async }}</p>
        <app-child (onChange)="onChange($event)"></app-child>
      </div>
  `
})

export class ParentComponent {
    value: Observable<number>;
    constructor(private store: Store<any>) {
        this.value = this.store.select('value');
    }

    onChange(isIncrement: boolean) {
        // this.value += (isIncrement ? 1 : -1);
    }
}
