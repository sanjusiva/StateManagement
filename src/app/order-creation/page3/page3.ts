import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DetailsActions from '../../store/lookupStore/lookup.action';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';
import { SignalService } from '../../service/signal.service';

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page3.html',
  styleUrl: './page3.css',
})
export class Page3 {
  public details: any;
  public signalValue: any;
  constructor(private store: Store<{ data: any }>, public router: Router,private orderSignalService : SignalService) {}
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
      instructions:{},
      accessorials:{},
      linehaul:{}
      }
    this.store.dispatch(DetailsActions.setDetailsLookup(hardcodedObject));
    this.orderSignalService.setOrderdetails(hardcodedObject);
  }

  resetDetailsValue() {
    this.store.dispatch(DetailsActions.resetDetailsLookup());
    this.orderSignalService.clearOrderDetails();
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
    this.orderSignalService.setOrderdetails(hardcodedObject);
    this.router.navigate(['/page2']);
  }
}
