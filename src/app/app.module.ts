import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FIBONACCI_WEBWORKER_FACTORY } from 'projects/fibonacci-webworker/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('projects/demo-lib-consuming-webworker/src/lib/demo-lib-consuming-webworker.module').then(
            (m) => m.DemoLibConsumingWebworkerModule
          ),
      },
    ]),
  ],
  providers: [
    {
      provide: FIBONACCI_WEBWORKER_FACTORY,
      useValue: function (): Worker {
        return new Worker('projects/fibonacci-webworker/src/lib/fibonacci', {
          name: 'fibonacci.worker',
          type: 'module',
        });
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
