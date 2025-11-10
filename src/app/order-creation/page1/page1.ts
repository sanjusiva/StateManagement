import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DetailsActions from '../../store/lookupStore/lookup.action';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page1.html',
  styleUrl: './page1.css',
})
export class Page1 {
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
      customer:{agnetId:1,agentName:'someName'},
      weight:{actWgh:34,dimWgh:45},
      tariff:{},
      shipper:{},
      consognee:{}
    };
    this.store.dispatch(DetailsActions.setDetailsLookup(hardcodedObject));
  }
  
  continue(){
    this.router.navigate(['/page2']);
  }

  resetDetailsValue() {
    this.store.dispatch(DetailsActions.resetDetailsLookup());
  }
}
