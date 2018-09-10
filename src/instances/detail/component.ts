import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {delay, startWith} from 'rxjs/operators';
import {InstanceService} from '../../common/services/instance';
import {Instance, ProvisioningStatus} from '../../typings/api';

@Component({
  selector: 'app-instance-detail',
  templateUrl: 'template.html'
})
export class InstanceDetailComponent implements OnInit {
  public instance: Instance;
  public isInitialized = false;

  constructor(private _instanceService: InstanceService, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.instance = {instanceId: this._route.snapshot.params.instanceId} as Instance;
    this._instanceService.instance(this.instance.instanceId)
      .pipe(delay(1000))
      .subscribe(instance => {
      this.instance = instance;
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
