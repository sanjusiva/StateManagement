import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  public details$;
  constructor(private store: Store<{ data: number }>) {
    this.details$ = this.store.selectSignal((state) => state.data);
  }
}
