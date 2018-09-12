import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConfigurationService} from '../common/services/api/configuration';
import { Configuration, ConfigurationSettings } from 'typings/api';

@Component({
  selector: 'app-controller',
  templateUrl: './template.html',
})
export class ControllerComponent implements OnInit, OnDestroy{
  controllerId: string;
  configuration: Configuration;
  configurationSettings: ConfigurationSettings[];

  isInitialized = false;

  private parametersObservable: any;
  private configurationObservable: any;
  private configurationSettingsObservable: any;

  constructor(private _route: ActivatedRoute, private _configurationService: ConfigurationService,) {}

  ngOnInit() {
    this.parametersObservable = this._route.params.subscribe(params => {
      this.controllerId = this._route.snapshot.params.controllerId;

      const configId = "1"; // TODO load this from backend

      //load config data
      if(this.configurationObservable != null) {
        this.configurationObservable.unsubscribe;
      }
      this.configurationObservable = this._configurationService.configuration(configId).subscribe(configuration => {
        this.configuration = configuration;
      });
      
      //load settings
      if(this.configurationSettingsObservable != null) {
        this.configurationSettingsObservable.unsubscribe;
      }
      this.configurationSettingsObservable = this._configurationService.configurationSettings(configId).subscribe(configurationSettings => {
        this.configurationSettings = configurationSettings;
      });
      
      this.isInitialized = true;
    });
  }

  // /configurations/{configurationId}/settings

  ngOnDestroy() {
    if(this.parametersObservable != null) {
      this.parametersObservable.unsubscribe();
    }

    if(this.configurationObservable != null) {
      this.configurationObservable.unsubscribe;
    }

    if(this.configurationSettingsObservable != null) {
      this.configurationSettingsObservable.unsubscribe;
    }
  }
}
