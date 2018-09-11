import {Injectable} from '@angular/core';
import {ServicesModule} from './module';
import {BaseApi} from './api';
import {Observable} from 'rxjs';
import {Controller} from '../../typings/api';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: ServicesModule})
export class ControllerService extends BaseApi {
  private readonly _url = `${this._baseUrl}/controllers`;

  constructor(private _http: HttpClient) {
    super();
  }

  controllers(): Observable<Controller[]> {
    return this._http.get<Controller[]>(this._url);
  }

  controller(id: number): Observable<Controller> {
    return this.controllers().pipe(map<Controller[], Controller>(controllers => {
      if (controllers !== undefined && controllers.length >= id) {
        return controllers[id];
      }

      return {} as Controller;
    }));
  }

}
