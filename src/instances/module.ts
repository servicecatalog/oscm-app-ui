import {NgModule} from '@angular/core';
import {ComponentsModule} from '../common/components/module';
import {SharedModule} from '../shared.module';

import {InstancesComponent} from './component';

@NgModule({
  declarations: [
    InstancesComponent
  ],
  imports: [
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class InstancesModule {}
