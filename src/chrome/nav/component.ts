import {Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: 'template.html',
})
export class NavComponent {
  public opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }
}
