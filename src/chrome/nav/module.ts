import {NgModule} from '@angular/core';
import {NavComponent} from './component';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [NavComponent],
  imports: [SharedModule],
  exports: [NavComponent]
})
export class NavModule {}
