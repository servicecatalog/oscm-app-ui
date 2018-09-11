import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';

import {ConfigComponent} from './component';
import {CreateConfigDialogComponent} from './create/dialog';
import {ComponentsModule} from '../common/components/module';

@NgModule({
  declarations: [
    ConfigComponent,
    CreateConfigDialogComponent,
  ],
  imports: [
    ComponentsModule,
    SharedModule,
  ],
  entryComponents: [CreateConfigDialogComponent],
  providers: [],
})
export class ConfigModule {}
