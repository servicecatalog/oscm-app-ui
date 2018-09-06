import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';

import {InstancesComponent} from './component';

@NgModule({
  declarations: [
    InstancesComponent
  ],
  imports: [
    SharedModule,
  ],
  providers: [],
})
export class InstancesModule {}
