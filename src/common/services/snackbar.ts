import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {ServicesModule} from './module';

@Injectable({providedIn: ServicesModule})
export class SnackbarService {
  private readonly _closeAfter = 5000;

  constructor(private readonly _snacbkar: MatSnackBar) {}

  open(message: string) {
    this._snacbkar.open(message, 'Dismiss', {
      duration: this._closeAfter,
    } as MatSnackBarConfig);
  }
}
