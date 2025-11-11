import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalService {
  private orderDetailsSignal = signal<any[]>([]);

  public getOrderDetails() {
    return this.orderDetailsSignal;
  }

  public setOrderdetails(data: any) {
    // this.orderDetailsSignal.update((currentData: any[]) => [...currentData, data]); 
    this.orderDetailsSignal.set(data)
  }

  public clearOrderDetails(){
    this.orderDetailsSignal.set([])
  }
}
