import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class AppService {

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

}
