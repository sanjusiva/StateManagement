import { Component, effect, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { SignalService } from './service/signal.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  public details$;
  public signalValue$: any;
  constructor(private store: Store<{ data: number }>, private signalService: SignalService) {
    this.details$ = this.store.selectSignal((state) => state.data);
    effect(() => {
      this.signalValue$ = this.signalService.getOrderDetails()();
    });
  }
}
