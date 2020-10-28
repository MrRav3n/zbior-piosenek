import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  openRegisterModal = new EventEmitter();
  openSureConModal = new EventEmitter();
  constructor() { }

  openRegister() {
    this.openRegisterModal.emit();
  }
  openSureConfirmation() {
    this.openSureConModal.emit();
  }

}
