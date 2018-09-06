import {Component, OnInit} from '@angular/core';
import {InstanceService} from "../common/services/instance";
import {Instance} from "../typings/api";

@Component({
  selector: 'app-instances',
  templateUrl: './template.html'
})
export class InstancesComponent implements OnInit {
  instances: Instance[] = [];

  constructor(private _instanceService: InstanceService) {}

  ngOnInit(): void {
    this._instanceService.instance().subscribe(instances => {
      this.instances = instances;
    })
  }


}
