import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared.module';
import {CardComponent} from './card/component';
import {ChipsComponent} from './chips/chips';
import {PropertyComponent} from './property/component';

@NgModule({
  imports: [SharedModule],
  declarations: [ChipsComponent, CardComponent, PropertyComponent],
  exports: [ChipsComponent, CardComponent, PropertyComponent]
})
export class ComponentsModule {}
