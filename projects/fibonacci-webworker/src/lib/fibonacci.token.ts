import { InjectionToken } from '@angular/core';

export const FIBONACCI_WEBWORKER_FACTORY = new InjectionToken<() => Worker>(
  'fibonacci'
);
