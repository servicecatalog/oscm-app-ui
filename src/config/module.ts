import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';

import {ConfigComponent} from './component';
import {ComponentsModule} from '../common/components/module';

@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    ComponentsModule,
    SharedModule,
  ],
  providers: [],
})
export class ConfigModule {}
