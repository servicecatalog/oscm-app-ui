import {NgModule} from '@angular/core';
import {ComponentsModule} from '../common/components/module';
import {SharedModule} from '../shared.module';

import {InstancesComponent} from './component';
import {InstanceDetailComponent} from './detail/component';

@NgModule({
  declarations: [
    InstancesComponent,
    InstanceDetailComponent,
  ],
  imports: [
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class InstancesModule {}
