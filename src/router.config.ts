import {Routes} from '@angular/router';
import {HomeComponent} from './home/component';
import {InstancesComponent} from './instances/component';
import {ConfigComponent} from './config/component';
import {InstanceDetailComponent} from './instances/detail/component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'instances', component: InstancesComponent},
  {path: 'instances/:instanceId', component: InstanceDetailComponent},
  {path: 'config', component: ConfigComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'},
];
