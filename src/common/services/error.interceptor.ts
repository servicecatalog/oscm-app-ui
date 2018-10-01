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
      let message = '';
      if (err instanceof HttpErrorResponse) {
        if (typeof(err.error) === 'string') {
          message = err.message;
        } else {
          const apiError = (err as HttpErrorResponse).error as ApiResponseError;
          message = apiError.errorMessage;
        }

        this._snackBar.open(message);
      }

      return throwError(err);
    }));
  }
}
