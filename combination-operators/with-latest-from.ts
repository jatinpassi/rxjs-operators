import { withLatestFrom, map, take } from "rxjs/operators";
import { interval } from "rxjs";

export const withLatestFrom$ = interval(5000).pipe(
  take(6),
  withLatestFrom(interval(1000)),
  map(([first, second]) => {
    return `First Source (5s): ${first} Second Source (1s): ${second}`;
  })
);
