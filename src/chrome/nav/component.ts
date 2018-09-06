import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

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
export class NavComponent {
  public collapsed = false;

  adminLinks: Link[] = [
    new Link('orgconf', 'Organization config', 'build'),
    new Link('instances', 'Instances', 'cloud'),
  ];

  controllerLinks: Link[] = [
    new Link('aws', 'AWS', 'extension'),
    new Link('azure', 'Azure', 'extension'),
    new Link('openstack', 'OpenStack', 'extension'),
    new Link('vmware', 'VMware', 'extension')
  ];

  toggle(): void {
    this.collapsed = !this.collapsed;
  }
}
