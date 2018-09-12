import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {InstanceService} from '../common/services/api/instance';
import {TranslationService} from '../common/services/translation';
import {Instance, ProvisioningStatus} from '../typings/api';

@Component({
  selector: 'app-instances',
  templateUrl: './template.html'
})
export class InstancesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isInitialized = false;

  displayedColumns: string[] = ['instanceId', 'subscriptionId', 'controllerId', 'organizationName', 'status', 'requestTime'];
  dataSource: MatTableDataSource<Instance>;

  instances: Instance[] = [];

  constructor(private _instanceService: InstanceService,
              private _translationService: TranslationService) {}

  ngOnInit(): void {
    this._instanceService.instances()
      .subscribe(instances => {
      this.instances = instances;
      this.dataSource = new MatTableDataSource<Instance>(this.instances);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isInitialized = true;
    });
  }

  getStatus(status: ProvisioningStatus): string {
    return this._translationService.translate(status);
  }
}
