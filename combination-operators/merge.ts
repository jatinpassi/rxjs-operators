import { merge, interval } from "rxjs";
import { mapTo, take, merge as merge2 } from "rxjs/operators";

export const merge$ = merge(
  interval(1000).pipe(
    mapTo("first"),
    take(3)
  ),
  interval(2500).pipe(
    mapTo("second"),
    take(3)
  ),
  interval(1500).pipe(
    mapTo("third"),
    take(3)
  ),
  interval(800).pipe(
    mapTo("fourth"),
    take(3)
  )
);

export const merge2$ = interval(2000).pipe(
  take(3),
  merge2(interval(1000).pipe(take(3)))
);
