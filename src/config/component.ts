import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../common/services/configuration';
import {Configuration} from '../typings/api';

@Component({
  selector: 'app-config',
  templateUrl: './template.html'
})
export class ConfigComponent implements OnInit {
  orgControllersMap = new Map<string, string[]>();

  constructor(private _configurationService: ConfigurationService) {}

  ngOnInit(): void {
    this._configurationService.configurations().subscribe(configurations => {
      this._initOrgControllerMap(configurations);
    });
  }

  private _initOrgControllerMap(configurations: Configuration[]): void {
    configurations.forEach(configuration => {
      if (!this.orgControllersMap.has(configuration.organizationId)) {
        this.orgControllersMap.set(configuration.organizationId, [configuration.controllerId]);
      } else {
        this.orgControllersMap.set(configuration.organizationId,
          this.orgControllersMap.get(configuration.organizationId).concat(configuration.controllerId));
      }
    });
  }
}
