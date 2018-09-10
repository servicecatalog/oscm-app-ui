import {Component, Input, OnInit} from '@angular/core';
import {InstanceAttribute, InstanceParameter} from '../../../typings/api';

@Component({
  selector: 'app-chips',
  templateUrl: 'template.html'
})
export class ChipsComponent implements OnInit {
  // TODO: should have single parent class
  @Input() list: InstanceParameter[]|InstanceAttribute[];

  ngOnInit(): void {
    if (this.list === undefined) {
      this.list = [];
    }
  }
}
