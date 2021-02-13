import { concatAll, take } from "rxjs/operators";
import { interval, of } from "rxjs";
export const concatAll$ = of(
  interval(1000).pipe(take(5)),
  interval(500).pipe(take(2)),
  interval(2000).pipe(take(9)),
).pipe(  concatAll()
);
