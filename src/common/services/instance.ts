import {Injectable} from '@angular/core';
import {ServicesModule} from './module';
import {Instance} from '../../typings/api';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from './api';

@Injectable({providedIn: ServicesModule})
export class InstanceService extends BaseApi {
  private readonly _url = `${this._baseUrl}/instances`;

  constructor(private _http: HttpClient) {
    super();
  }

  instance(): Observable<Instance[]> {
    return this._http.get<Instance[]>(this._url);
  }
}
