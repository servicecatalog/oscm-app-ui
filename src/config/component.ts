import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ConfigurationService} from '../common/services/api/configuration';
import {TranslationService} from '../common/services/translation';
import {Configuration} from '../typings/api';
import {CreateConfigDialogComponent} from './create/dialog';

@Component({
  selector: 'app-config',
  templateUrl: './template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigComponent implements OnInit {
  orgControllersMap = new Map<string, string[]>();
  isInitialized = false;

  constructor(private readonly dialog_: MatDialog,
              private _configurationService: ConfigurationService,
              private _translationService: TranslationService,
              private _cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this._configurationService.configurations().subscribe(configurations => {
      this._initOrgControllerMap(configurations);
      this.isInitialized = true;
      this._cdr.detectChanges();
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

  create() {
    this.dialog_.open(CreateConfigDialogComponent, {width: '600px'})
      .afterClosed()
      .subscribe((result) => {
        console.log(result);
      });
  }

  toControllerName(controllerId: string) {
    return this._translationService.translate(controllerId);
  }
}
