import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ChromeComponent} from './chrome/component';
import {ChromeModule} from './chrome/module';
import {ConfigModule} from './config/module';
import {HomeModule} from './home/module';
import {InstancesModule} from './instances/module';
import {routes} from './router.config';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ChromeModule,
    HomeModule,
    InstancesModule,
    ConfigModule,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [ChromeComponent]
})
export class CoreModule {}
