import {HttpErrorResponse} from '@angular/common/http';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {ConfigurationService} from '../common/services/api/configuration';
import {TranslationService} from '../common/services/translation';
import {Configuration, ResponseError} from '../typings/api';
import {CreateConfigDialogComponent} from './create/dialog';

@Component({
  selector: 'app-config',
  templateUrl: './template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigComponent implements OnInit {
  orgControllersMap = new Map<string, string[]>();
  isInitialized = false;

  constructor(private readonly _dialog: MatDialog,
              private _configurationService: ConfigurationService,
              private _translationService: TranslationService,
              private _cdr: ChangeDetectorRef,
              private _snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this._configurationService.configurations().subscribe(configurations => {
      this._initOrgControllerMap(configurations);
      this.isInitialized = true;
      this._cdr.detectChanges();
    });
  }

  private _initOrgControllerMap(configurations: Configuration[]): void {
    configurations.forEach(configuration => {
      this._addConfiguration(configuration);
    });
  }

  private _addConfiguration(configuration: Configuration) {
    if (!this.orgControllersMap.has(configuration.organizationId)) {
      this.orgControllersMap.set(configuration.organizationId, [configuration.controllerId]);
    } else {
      this.orgControllersMap.set(configuration.organizationId,
        this.orgControllersMap.get(configuration.organizationId).concat(configuration.controllerId));
    }

    this._cdr.detectChanges();
  }

  create() {
    this._dialog.open(CreateConfigDialogComponent, {width: '600px'})
      .afterClosed()
      .subscribe((config: Configuration) => {
        this._configurationService.create(config)
          .subscribe(result => {
            this._addConfiguration(result);
          }, (err: HttpErrorResponse) => {
            const apiError = err.error as ResponseError;
            this._snackbar.open(apiError.errorMessage,
              'Close',
              {duration: 5000} as MatSnackBarConfig);
          });
      });
  }

  toControllerName(controllerId: string) {
    return this._translationService.translate(controllerId);
  }
}
