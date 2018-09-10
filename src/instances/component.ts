import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {delay} from 'rxjs/operators';
import {InstanceService} from '../common/services/instance';
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

  constructor(private _instanceService: InstanceService) {}

  ngOnInit(): void {
    this._instanceService.instances()
      .pipe(delay(1000))
      .subscribe(instances => {
      this.instances = instances;
      this.dataSource = new MatTableDataSource<Instance>(this.instances);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isInitialized = true;
    });
  }

  getStatus(status: ProvisioningStatus): string {
    switch (status) {
      case 'WAITING_FOR_SYSTEM_CREATION':
        return 'Waiting';
      case 'COMPLETED':
        return 'Completed';
    }
  }
}
