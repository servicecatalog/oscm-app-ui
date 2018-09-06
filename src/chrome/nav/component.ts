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

  homeLink: Link = new Link('home', 'Home', 'home');

  adminLinks: Link[] = [
    new Link('a', 'Organization config', 'build'),
    new Link('instances', 'Instances', 'cloud'),
  ];

  controllerLinks: Link[] = [
    new Link('aws', 'AWS', 'extensions'),
    new Link('azure', 'Azure', 'extensions'),
    new Link('openstack', 'OpenStack', 'extensions'),
    new Link('VMware', 'VMware', 'extensions')
  ];

  toggle(): void {
    this.collapsed = !this.collapsed;
  }
}
