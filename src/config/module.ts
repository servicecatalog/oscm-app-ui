import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';

import {ConfigComponent} from './component';

@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    SharedModule,
  ],
  providers: [],
})
export class ConfigModule {}
