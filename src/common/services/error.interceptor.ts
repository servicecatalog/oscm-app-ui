import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ApiResponseError} from '../../typings/api';
import {SnackbarService} from './snackbar';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private readonly _snackBar: SnackbarService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse) {
        const apiError = (err as HttpErrorResponse).error as ApiResponseError;
        this._snackBar.open(apiError.errorMessage);
      }

      return throwError(err);
    }));
  }
}
