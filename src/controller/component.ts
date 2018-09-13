import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConfigurationService} from '../common/services/api/configuration';
import {Configuration, ConfigurationSettings} from 'typings/api';
import {TranslationService} from '../common/services/translation';

@Component({
  selector: 'app-controller',
  templateUrl: './template.html',
})
export class ControllerComponent implements OnInit, OnDestroy {
  controllerName: string;
  configuration: Configuration;
  configurationSettings: ConfigurationSettings[];

  isInitialized = false;

  private parametersObservable: any;
  private configurationsObservable: any;
  private configurationSettingsObservable: any;

  constructor(private _route: ActivatedRoute,
              private _configurationService: ConfigurationService,
              private _translationService: TranslationService) {
  }

  ngOnInit() {
    this.parametersObservable = this._route.params.subscribe(params => {
      this.isInitialized = false;
      this.controllerName = this._translationService.translate(params.controllerId);

      const organizationId = '24tr1q3w'; // TODO load this from backend

      // load config data
      if (this.configurationsObservable != null) {
        this.configurationsObservable.unsubscribe();
      }
      this.configurationsObservable = this._configurationService.configurationsForOrg(organizationId).subscribe(configurations => {
        const config = this.findConfiguration(params.controllerId, configurations);
        if (config === undefined) {
          return;
        }

        this.configuration = config;

        // load settings
        if (this.configurationSettingsObservable != null) {
          this.configurationSettingsObservable.unsubscribe();
        }
        this.configurationSettingsObservable = this._configurationService.configurationSettings(`${config.id}`)
          .subscribe(configurationSettings => {
            this.configurationSettings = configurationSettings;

            this.isInitialized = true;
          });
      });
    });
  }

  findConfiguration(controllerId: string, configurations: Configuration[]): Configuration | undefined {
    let result: Configuration;

    configurations.forEach(config => {
      if (config.controllerId === controllerId) {
        result = config;
      }
    });

    return result;
  }

  // /configurations/{configurationId}/settings

  ngOnDestroy() {
    if (this.parametersObservable != null) {
      this.parametersObservable.unsubscribe();
    }

    if (this.configurationsObservable != null) {
      this.configurationsObservable.unsubscribe();
    }

    if (this.configurationSettingsObservable != null) {
      this.configurationSettingsObservable.unsubscribe();
    }
  }
}
