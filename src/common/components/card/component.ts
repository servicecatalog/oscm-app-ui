import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'template.html',
  styleUrls: ['style.scss']
})
export class CardComponent {
  @Input() initialized = true;
  @Input() role: string;
  @Input() withTitle = true;
}
