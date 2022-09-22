/// <reference lib="webworker" />

// this file is excluded from the compilation of the `fibonacci-webworker` library
// this is due to the fact that an app has to import it directly (instead of a path
// coming from a ts alias path)

import { fibonacci } from "projects/fibonacci/src/public-api";

addEventListener('message', ({ data }) => {
  postMessage(fibonacci(data));
});
