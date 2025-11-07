import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DetailsActions from '../../store/lookupStore/lookup.action';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-page1',
  imports: [CommonModule],
  templateUrl: './page1.html',
  styleUrl: './page1.css',
})
export class Page1 {
   public details$;
    constructor(private store: Store<{ data: number }>) {
      this.details$ = this.store.select((state) => state.data);
  
    }
  
setHardcodedObject(): void {
    const hardcodedObject = {
      name: "John Doe",
      age: 30,
      occupation: "Software Developer"
    };
    console.log("Hardcoded Object:", hardcodedObject);
    this.store.dispatch(DetailsActions.setDetailsLookup(hardcodedObject));
  }
}
