// I've chosen a slow implementation of fibonacci on purpose
// so that it takes more time to run otherwise an optimised
// version could take less than 1s to compute fibonacci(3000)
// while this one will struggle with fibonacci(30)
// https://stackoverflow.com/questions/11287418/why-is-this-js-code-so-slow
export const fibonacci = (n) => {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};
