import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DetailsActions from '../../store/lookupStore/lookup.action';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page2.html',
  styleUrl: './page2.css',
})
export class Page2 {
  public details: any;
  constructor(private store: Store<{ data: any }>, public router: Router) {}
  ngOnInit() {
    this.store
      .select((state) => state.data)
      .pipe(take(1))
      .subscribe((data) => {
        this.details = data;
      });
  }
  setHardcodedObject(): void {
    const hardcodedObject = {
      ...this.details,
      schedule: {},
      commodity: {},
      reference: {},
    };
    this.store.dispatch(DetailsActions.setDetailsLookup(hardcodedObject));
    this.router.navigate(['/page3']);
  }

  resetDetailsValue() {
    this.store.dispatch(DetailsActions.resetDetailsLookup());
    this.router.navigate(['/page1']);
  }

  navigateToPrevious() {
    const hardcodedObject = {
      ...this.details,
      schedule: {},
      commodity: {},
      reference: {},
    };
    this.store.dispatch(DetailsActions.setDetailsLookup(hardcodedObject));
    this.router.navigate(['/page1']);
  }
}
