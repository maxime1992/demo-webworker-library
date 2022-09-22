import { Component, Inject } from '@angular/core';
import { FIBONACCI_WEBWORKER_FACTORY } from 'projects/fibonacci-webworker/src/public-api';
import { interval } from 'rxjs';

@Component({
  selector: 'lib-demo-lib-consuming-webworker',
  template: `
    <p>
      Timer just to prove that the page isn't frozen while we compute fibonacci
      (which it would if we were doing it on the main thread!):
      {{ timer$ | async }}
    </p>

    <div *ngIf="result; else computingTpl">
      <h1>Fibonacci 45</h1>
      <p>{{ result | json }}</p>
    </div>

    <ng-template #computingTpl>
      Computing fibonacci(45)... Be patient =)!
    </ng-template>
  `,
})
export class DemoLibConsumingWebworkerComponent {
  public result;

  public timer$ = interval(1000);

  constructor(
    @Inject(FIBONACCI_WEBWORKER_FACTORY) fibonacciWebworkerFactory: () => Worker
  ) {
    const fibonacciWebworker = fibonacciWebworkerFactory();

    fibonacciWebworker.onmessage = ({ data }) => {
      this.result = data;
    };

    fibonacciWebworker.postMessage(45);
  }
}
