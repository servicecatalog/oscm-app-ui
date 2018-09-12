import {Injectable} from '@angular/core';
import {ServicesModule} from './module';

@Injectable({providedIn: ServicesModule})
export class TranslationService {
  private _translationMap = new Map<string, string>([
    ['WAITING_FOR_SYSTEM_CREATION', 'Waiting'],
    ['COMPLETED', 'Completed'],
    ['ess.vmware', 'VMWare'],
    ['ess.openstack', 'Openstack'],
    ['ess.azure', 'Azure'],
    ['ess.aws', 'AWS'],
  ]);

  translate(input: string): string {
    if(this._translationMap.has(input)) {
      return this._translationMap.get(input);
    }

    return input;
  }
}
