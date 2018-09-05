import {Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: 'template.html',
})
export class NavComponent {
  public opened = true;
  links: string[] = ['Home', 'Organization config', 'Instances', 'VMware', 'Azure etc.'];

  toggle(): void {
    this.opened = !this.opened;
  }
}
