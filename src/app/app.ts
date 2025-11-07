import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import * as CounterActions from '../app/store/counter.action.js';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { counterReducer } from './store/counter.reducer.js';
import { Page1 } from './order-creation/page1/page1.js';

@Component({
  selector: 'app-root',
  imports: [CommonModule,Page1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public count$;
  constructor(private store: Store<{ counts: number }>) {
    this.count$ = this.store.select((state) => state.counts);

  }


  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }
}
