import { interval, combineLatest } from "rxjs";
import { take } from "rxjs/operators";

export const combineLatest$ = combineLatest(
  interval(1000).pipe(take(2)),
  interval(1000).pipe(take(4)),
  interval(1000).pipe(take(3))
);
export const combineLatest2$ = combineLatest(
  interval(7000).pipe(take(3)),
  interval(4000).pipe(take(2)),
  interval(1000).pipe(take(3)),
  function(one, two, three) {
    return `first called ${one}, second called ${two}, third called ${three}`;
  }
);
