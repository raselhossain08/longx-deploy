import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    companyToggled: EventEmitter<boolean> = new EventEmitter<boolean>();
    personVToggled: EventEmitter<boolean> = new EventEmitter<boolean>();
    TwoFactorToggled: EventEmitter<boolean> = new EventEmitter<boolean>();
    UpdatePasswordToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

    emitCompanyChanged(companyToggled: boolean): void {
      this.companyToggled.emit(companyToggled);
    }

    emitPersonVChanged(personVToggled: boolean): void {
      this.personVToggled.emit(personVToggled);
    }
     emitTwoFactorChanged(TwoFactorToggled: boolean): void {
      this.TwoFactorToggled.emit(TwoFactorToggled);
    }
    emitUpdatePasswordChanged(UpdatePasswordToggled: boolean): void {
      this.UpdatePasswordToggled.emit(UpdatePasswordToggled);
    }
}
