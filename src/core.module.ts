import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ChromeComponent} from './chrome/component';
import {ChromeModule} from './chrome/module';
import {ConfigModule} from './config/module';
import {HomeModule} from './home/module';
import {InstancesModule} from './instances/module';
import {routes} from './router.config';
import { ControllerModule } from 'controller/module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ChromeModule,
    HomeModule,
    InstancesModule,
    ConfigModule,
    ControllerModule,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [ChromeComponent]
})
export class CoreModule {}
