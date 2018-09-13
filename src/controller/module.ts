import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';

import {ControllerComponent} from './component';
import {ComponentsModule} from '../common/components/module';
import {ConfigurationSettingsDialogComponent} from './settingdialog/dialog';

@NgModule({
  declarations: [
    ControllerComponent,
    ConfigurationSettingsDialogComponent,
  ],
  imports: [
    ComponentsModule,
    SharedModule,
  ],
  entryComponents: [ConfigurationSettingsDialogComponent],
  providers: [],
})
export class ControllerModule {}
