import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChromeComponent} from './component';
import {RouterModule} from '@angular/router';
import {routes} from '../router.config';
import {HomeModule} from '../home/module';

@NgModule({
  declarations: [
    ChromeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [ChromeComponent]
})
export class ChromeModule {
}
