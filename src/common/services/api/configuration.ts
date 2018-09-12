import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Configuration, ConfigurationSettings} from '../../../typings/api';
import {ServicesModule} from '../module';
import {BaseApi} from './api';

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

  configurationSettings(id: string): Observable<ConfigurationSettings[]> {
    return this._http.get<ConfigurationSettings[]>(`${this._url}/${id}/settings`);
  }

  create(config: Configuration): Observable<Configuration> {
    return this._http.post<Configuration>(this._url, config);
  }
}
