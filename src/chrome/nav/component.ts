import {Component} from '@angular/core';

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
})
export class NavComponent {
  public collapsed = false;

  homeLink: Link = new Link('home', 'Home', 'home');

  adminLinks: Link[] = [
    new Link('a', 'Organization config'),
    new Link('instances', 'Instances'),
  ];

  controllerLinks: Link[] = [
    new Link('aws', 'AWS', 'home'),
    new Link('azure', 'Azure'),
    new Link('openstack', 'OpenStack'),
    new Link('VMware', 'VMware')
  ];

  toggle(): void {
    this.collapsed = !this.collapsed;
  }
}
