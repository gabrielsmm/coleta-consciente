import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _snack: MatSnackBar) { }

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  isNullOrUndefined(obj: any) {
    return obj === null || obj === undefined;
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  mensagemErro(str: string){
    const config = new MatSnackBarConfig();
    config.panelClass = ['snack-background-red'];
    config.duration = 3000;
    config.horizontalPosition = 'end';
    config.verticalPosition = 'top';
    this._snack.open(`${str}`, '', config);
  }

  mensagemSucesso(str: string){
    const config = new MatSnackBarConfig();
    config.panelClass = ['snack-background-green'];
    config.duration = 3000;
    config.horizontalPosition = 'end';
    config.verticalPosition = 'top';
    this._snack.open(`${str}`, '', config);
  }

}
