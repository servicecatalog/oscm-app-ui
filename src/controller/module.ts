import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';

import {ControllerComponent} from './component';
import {ComponentsModule} from '../common/components/module';

@NgModule({
  declarations: [
    ControllerComponent,
  ],
  imports: [
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class ControllerModule {}
