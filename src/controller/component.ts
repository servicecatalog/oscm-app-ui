import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConfigurationService} from '../common/services/api/configuration';
import {Configuration, ConfigurationSettings} from 'typings/api';
import {TranslationService} from '../common/services/translation';
import {ConfigurationSettingService} from '../common/services/api/configurationsetting';
import {MatDialog} from '@angular/material';
import {ConfigurationSettingsDialogComponent} from './settingdialog/dialog';

@Component({
  selector: 'app-controller',
  templateUrl: './template.html',
})
export class ControllerComponent implements OnInit, OnDestroy {
  controllerName: string;
  configuration: Configuration;
  configurationSettings: ConfigurationSettings[];
  editable = true;
  isInitialized = false;

  private parametersObservable: any;
  private configurationsObservable: any;
  private configurationSettingsObservable: any;

  constructor(private _route: ActivatedRoute,
              private _configurationService: ConfigurationService,
              private _configurationSettingService: ConfigurationSettingService,
              private _matDialog: MatDialog,
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
        const config = this._findConfiguration(params.controllerId, configurations);
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

  private _findConfiguration(controllerId: string, configurations: Configuration[]): Configuration | undefined {
    let result: Configuration;

    configurations.forEach(config => {
      if (config.controllerId === controllerId) {
        result = config;
      }
    });

    return result;
  }

  remove(configSetting: ConfigurationSettings): void {
    this._configurationSettingService.remove(`${this.configuration.id}`, configSetting).subscribe(ignored => {
      this.configurationSettings = this.configurationSettings.filter(config => {
        return config.id !== configSetting.id;
      });
    });
  }

  create(): void {
    this._matDialog.open(ConfigurationSettingsDialogComponent, {
      width: '600px',
      data: {action: 'Create'}
    }).afterClosed()
      .subscribe(newConfigSetting => {
        if (!newConfigSetting) {
          return;
        }

        this._configurationSettingService.create(`${this.configuration.id}`, newConfigSetting)
          .subscribe(createdConfigSetting => {
            this.configurationSettings.push(createdConfigSetting);
          });
      });
  }

  edit(configSetting: ConfigurationSettings): void {
    this._matDialog.open(ConfigurationSettingsDialogComponent, {
      width: '600px',
      data: {action: 'Edit', key: configSetting.key, value: configSetting.value}
    }).afterClosed()
      .subscribe(updatedConfigSettings => {
        if (!updatedConfigSettings) {
          return;
        }

        updatedConfigSettings.id = configSetting.id;
        this._configurationSettingService.update(`${this.configuration.id}`, updatedConfigSettings)
          .subscribe(ignored => {
            this.configurationSettings.forEach(config => {
              if (config.id === configSetting.id) {
                config.key = updatedConfigSettings.key;
                config.value = updatedConfigSettings.value;
              }
            });
          });
      });
  }

  toggleEditMode() {
    this.editable = !this.editable;
  }

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
