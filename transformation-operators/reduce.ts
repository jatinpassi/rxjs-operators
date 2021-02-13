import { reduce, take } from "rxjs/operators";
import { interval } from "rxjs";
export const reduce$ = interval(1000).pipe(
  take(5),
  reduce((acc, curr) => acc + curr)
);
