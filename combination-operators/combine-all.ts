import { combineAll, take, map } from "rxjs/operators";
import { interval } from "rxjs";

export const combineAll$ = interval(1000).pipe(
  take(2),
  map(val =>
    interval(1000).pipe(
      map(i => `Result (${val}): ${i}`),
      take(5)
    )
  ),
  combineAll()
);
