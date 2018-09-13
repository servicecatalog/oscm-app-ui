import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ConfigurationService} from '../../common/services/api/configuration';
import {delay, repeatWhen} from 'rxjs/operators';

class Link {
  public icon: string;
  public route: string;
  public label: string;

  constructor(route: string, label: string, icon = 'info') {
    this.route = route;
    this.label = label;
    this.icon = icon;
  }
}

@Component({
  selector: 'app-nav',
  templateUrl: 'template.html',
  styleUrls: ['style.scss'],
  animations: [
    trigger('collapse', [
      state('visible', style({
        'width': '*',
      })),
      state('collapsed', style({
        'width': '64px',
      })),
      transition('visible => collapsed', animate('250ms ease-in-out', style({'width': '64px'}))),
      transition('collapsed => visible', animate('250ms ease-in-out', style({'width': '*'}))),
    ]),
  ],
})
export class NavComponent implements OnInit {
  public collapsed = false;

  constructor(private _configurationService: ConfigurationService) {
  }

  adminLinks: Link[] = [
    new Link('config', 'Config', 'build'),
    new Link('instances', 'Instances', 'cloud'),
  ];

  controllerLinks: Link[] = [];

  toggle(): void {
    this.collapsed = !this.collapsed;
  }

  addControllerLink(controllerId: string) {
    switch (controllerId) {
      case 'ess.aws':
        this.controllerLinks.push(new Link(`controllers/${controllerId}`, 'AWS', 'extension'));
        break;
      case 'ess.azure':
        this.controllerLinks.push(new Link(`controllers/${controllerId}`, 'Azure', 'extension'));
        break;
      case 'ess.openstack':
        this.controllerLinks.push(new Link(`controllers/${controllerId}`, 'OpenStack', 'extension'));
        break;
      case 'ess.vmware':
        this.controllerLinks.push(new Link(`controllers/${controllerId}`, 'VMWare', 'extension'));
        break;
    }
  }

  ngOnInit(): void {
    const orgId = '24tr1q3w';
    this._configurationService.configurationsForOrg(orgId)
      .pipe(repeatWhen(completed => completed.pipe(delay(1000))))
      .subscribe(configurations => {
        this.controllerLinks = [];
        configurations.forEach(config => {
          this.addControllerLink(config.controllerId);
        });
      });
  }
}
