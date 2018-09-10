import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared.module';
import {ChipsComponent} from './chips/chips';

@NgModule({
  imports: [SharedModule],
  declarations: [ChipsComponent],
  exports: [ChipsComponent]
})
export class ComponentsModule {}
