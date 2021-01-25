import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService {
  hide: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }


  updateHide(status: boolean) {
    this.hide.next(status);
  }
}
