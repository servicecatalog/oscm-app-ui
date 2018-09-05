import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {ChromeComponent} from './component';
import {NavModule} from './nav/module';

@NgModule({
  declarations: [
    ChromeComponent
  ],
  imports: [
    NavModule,
    SharedModule,
  ],
  providers: []
})
export class ChromeModule {}
