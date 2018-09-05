import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';

import {HomeComponent} from './component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
  ],
  providers: [],
})
export class HomeModule {}
