import {Routes} from '@angular/router';
import {HomeComponent} from './home/component';
import {InstancesComponent} from './instances/component';
import {ConfigComponent} from './config/component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'instances', component: InstancesComponent},
  {path: 'config', component: ConfigComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'},
];
