import {Component} from '@angular/core';

class Link {
  public icon: string;
  public route: string;
  public description: string;

  constructor(route: string, description: string, icon = 'info') {
    this.route = route;
    this.description = description;
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
  links: Link[] = [
    new Link('home', 'Home', 'home'),
    new Link('a', 'Organization config'),
    new Link('instances', 'Instances'),
    new Link('b', 'VMware'),
    new Link('c', 'Azure etc.')
  ];

  toggle(): void {
    this.collapsed = !this.collapsed;
  }
}
