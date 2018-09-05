import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ChromeComponent} from './chrome/component';
import {routes} from './router.config';
import {HomeModule} from './home/module';
import {ChromeModule} from './chrome/module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ChromeModule,
    HomeModule,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [ChromeComponent]
})
export class CoreModule {}
