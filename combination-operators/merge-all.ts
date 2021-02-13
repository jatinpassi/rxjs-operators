import { mergeAll, map, take, mapTo } from "rxjs/operators";
import { interval } from "rxjs";

export const mergeAll$ = interval(1000).pipe(
  take(3),
  map(val => interval(2000).pipe(take(2))),
  mergeAll()
);
