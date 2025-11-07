import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DetailsActions from '../../store/lookupStore/lookup.action';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page3.html',
  styleUrl: './page3.css',
})
export class Page3 {
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
      instructions:{},
      accessorials:{},
      linehaul:{}
      }
    this.store.dispatch(DetailsActions.setDetailsLookup(hardcodedObject));
  }

  resetDetailsValue() {
    this.store.dispatch(DetailsActions.resetDetailsLookup());
    this.router.navigate(['/page1']);
  }

  navigateToPrevious() {
    const hardcodedObject = {
      ...this.details,
      instructions:{},
      accessorials:{},
      linehaul:{}
      }
    this.store.dispatch(DetailsActions.setDetailsLookup(hardcodedObject));
    this.router.navigate(['/page2']);
  }
}
