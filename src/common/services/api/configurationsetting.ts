import {Injectable} from '@angular/core';
import {ServicesModule} from '../module';
import {BaseApi} from './api';
import {HttpClient} from '@angular/common/http';
import {ConfigurationSettings} from '../../../typings/api';
import {Observable} from 'rxjs';

@Injectable({providedIn: ServicesModule})
export class ConfigurationSettingService extends BaseApi {
  private readonly _url = `${this._baseUrl}/configurations`;

  constructor(private _http: HttpClient) {
    super();
  }

  remove(configId: string, configSettings: ConfigurationSettings): Observable<ConfigurationSettings> {
    return this._http.delete<ConfigurationSettings>(`${this._url}/${configId}/settings/${configSettings.id}`);
  }
}
