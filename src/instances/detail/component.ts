import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InstanceService} from '../../common/services/api/instance';
import {TranslationService} from '../../common/services/translation';
import {Instance, ProvisioningStatus} from '../../typings/api';

@Component({
  selector: 'app-instance-detail',
  templateUrl: 'template.html'
})
export class InstanceDetailComponent implements OnInit {
  public instance: Instance = {} as Instance;
  public isInitialized = false;

  constructor(private _instanceService: InstanceService,
              private _route: ActivatedRoute,
              private _translationService: TranslationService) {}

  ngOnInit(): void {
    this._instanceService.instance(this._route.snapshot.params.instanceId)
      .subscribe(instance => {
      this.instance = instance;
      this.isInitialized = true;
    });
  }

  getStatus(status: ProvisioningStatus): string {
    return this._translationService.translate(status);
  }

  getControllerName(controllerId: string): string {
    return this._translationService.translate(controllerId);
  }
}
