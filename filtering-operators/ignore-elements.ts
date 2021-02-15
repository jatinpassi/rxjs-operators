import { ignoreElements, take, filter, mergeMap } from "rxjs/operators";
import { interval, throwError, of } from "rxjs";

//Ignore all elements from source
export const ignoreElements$ = interval(1000).pipe(
  take(5),
  ignoreElements()
);

//Ignore all elements from source
export const ignoreElements1$ = interval(1000).pipe(
  filter(e => e % 5 === 0),
  ignoreElements()
);

//Only displaying error
export const ignoreElements2$ = interval(1000).pipe(
  mergeMap(val => {
    if (val === 4) {
      return throwError("Error at val:" + val);
    }
    return of(val);
  }),
  ignoreElements()
);
