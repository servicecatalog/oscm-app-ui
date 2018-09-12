import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ChromeComponent} from './chrome/component';
import {ChromeModule} from './chrome/module';
import {DelayInterceptor} from './common/services/delay.interceptor';
import {HttpErrorInterceptor} from './common/services/error.interceptor';
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DelayInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [ChromeComponent]
})
export class CoreModule {}
