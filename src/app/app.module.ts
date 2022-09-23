import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FIBONACCI_WEBWORKER_FACTORY } from 'fibonacci-webworker';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('demo-lib-consuming-webworker').then(
            (m) => m.DemoLibConsumingWebworkerModule
          ),
      },
    ]),
  ],
  providers: [
    {
      provide: FIBONACCI_WEBWORKER_FACTORY,
      useValue: function (): Worker {
        return new Worker(new URL('projects/fibonacci-webworker/src/lib/fibonacci', import.meta.url), {
          name: 'fibonacci.worker',
          type: 'module',
        });
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
