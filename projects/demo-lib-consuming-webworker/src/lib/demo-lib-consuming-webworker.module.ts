import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoLibConsumingWebworkerComponent } from './demo-lib-consuming-webworker.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoLibConsumingWebworkerComponent,
      },
    ]),
  ],
  declarations: [DemoLibConsumingWebworkerComponent],
  exports: [DemoLibConsumingWebworkerComponent],
})
export class DemoLibConsumingWebworkerModule {}
