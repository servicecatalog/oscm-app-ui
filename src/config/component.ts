import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {ConfigurationService} from '../common/services/api/configuration';
import {SnackbarService} from '../common/services/snackbar';
import {TranslationService} from '../common/services/translation';
import {Configuration} from '../typings/api';
import {CreateConfigDialogComponent} from './create/dialog';

class ConfigurationView {
  organizationId: string;
  controllers: ControllerView[];
}

class ControllerView {
  configId: number;
  id: string;
}

@Component({
  selector: 'app-config',
  templateUrl: './template.html',
})
export class ConfigComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  configurations: ConfigurationView[] = [];
  dataSource: MatTableDataSource<ConfigurationView> = new MatTableDataSource<ConfigurationView>();
  isInitialized = false;

  constructor(private readonly _dialog: MatDialog,
              private _configurationService: ConfigurationService,
              private _translationService: TranslationService,
              private _snacbkbar: SnackbarService) {}

  ngOnInit(): void {
    this._configurationService.configurations().subscribe(configurations => {
      configurations.forEach(config => {
        this._addConfiguration(config);
      });

      this.dataSource.paginator = this.paginator;
      this.isInitialized = true;
    });
  }

  private _findIndex(config: Configuration) {
    let idx = -1;

    this.configurations.forEach((configuration, index) => {
      if (configuration.organizationId === config.organizationId) {
        idx = index;
        return;
      }
    });

    return idx;
  }

  private _addConfiguration(config: Configuration): void {
    const idx = this._findIndex(config);
    if (idx < 0) {
      this.configurations.push({
        organizationId: config.organizationId,
        controllers: [{id: config.controllerId, configId: config.id}],
      } as ConfigurationView);
    } else {
      this.configurations[idx].controllers.push({id: config.controllerId, configId: config.id});
    }

    this.dataSource.data = this.configurations;
  }

  create() {
    this._dialog.open(CreateConfigDialogComponent, {width: '600px'})
      .afterClosed()
      .subscribe((config: Configuration) => {
        this._configurationService.create(config)
          .subscribe(result => {
            this._addConfiguration(result);
            this._snacbkbar.open('Configuration saved successfully');
          });
      });
  }

  remove(controller: ControllerView, config: ConfigurationView): void {
     this._configurationService.remove(controller.configId).subscribe(ignored => {
      this.configurations.forEach((c, idx, obj) => {
        if(c.organizationId === config.organizationId) {
          c.controllers = c.controllers.filter(ctrl => {
            return ctrl !== controller;
          })
          
          //Remove whole entry when there are no controllers left
          if (c.controllers.length < 1) {
            obj.splice(idx, 1);
            this.dataSource.data = this.configurations;
          }
        }
      });
     });
  }

  toControllerName(controller: ControllerView) {
    return this._translationService.translate(controller.id);
  }
}
