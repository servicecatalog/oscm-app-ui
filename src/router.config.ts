import {Routes} from '@angular/router';
import {HomeComponent} from './home/component';
import {InstancesComponent} from './instances/component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'instances', component: InstancesComponent},
  {path: '**', redirectTo: 'home'},
];
