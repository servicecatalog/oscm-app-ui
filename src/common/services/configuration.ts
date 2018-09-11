import {Injectable} from '@angular/core';
import {ServicesModule} from './module';
import {BaseApi} from './api';
import {Observable} from 'rxjs';
import {Configuration} from '../../typings/api';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: ServicesModule})
export class ConfigurationService extends BaseApi {
  private readonly _url = `${this._baseUrl}/configurations`;

  constructor(private _http: HttpClient) {
    super();
  }

  configurations(): Observable<Configuration[]> {
    return this._http.get<Configuration[]>(this._url);
  }

  configuration(id: string): Observable<Configuration> {
    return this._http.get<Configuration>(`${this._url}/${id}`);
  }
}
