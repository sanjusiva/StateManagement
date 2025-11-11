import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DetailsActions from '../../store/lookupStore/lookup.action';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { SignalService } from '../../service/signal.service';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page1.html',
  styleUrl: './page1.css',
})
export class Page1 {
  public details: any;
  public signalValue: any;
  constructor(
    private store: Store<{ data: any }>,
    public router: Router,
    private orderSignalService: SignalService
  ) {}
  ngOnInit() {
    this.store
      .select((state) => state.data)
      .pipe(take(1))
      .subscribe((data) => {
        this.details = data;
      });
    this.signalValue = this.orderSignalService.getOrderDetails()();
  }
  setHardcodedObject(): void {
    const hardcodedObject = {
      ...this.details,
      customer: {},
      weight: {},
      tariff: {},
      shipper: {},
      consognee: {},
    };
    this.store.dispatch(DetailsActions.setDetailsLookup(hardcodedObject));
    this.orderSignalService.setOrderdetails(hardcodedObject);
    this.router.navigate(['/page2']);
  }

  resetDetailsValue() {
    this.store.dispatch(DetailsActions.resetDetailsLookup());
    this.orderSignalService.clearOrderDetails();
  }
}
