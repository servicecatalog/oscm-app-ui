import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {InstanceService} from "../common/services/instance";
import {Instance} from "../typings/api";

@Component({
  selector: 'app-instances',
  templateUrl: './template.html'
})
export class InstancesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  displayedColumns: string[] = ['id', 'organizationName'];
  dataSource: MatTableDataSource<Instance>;

  instances: Instance[] = [];

  constructor(private _instanceService: InstanceService) {}

  ngOnInit(): void {
    this._instanceService.instance().subscribe(instances => {
      this.instances = instances;
      this.dataSource = new MatTableDataSource<Instance>(this.instances);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
