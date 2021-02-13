import { scan, take } from "rxjs/operators";
import { interval, Subject } from "rxjs";

export const scan$ = interval(1000).pipe(
  take(7),
  scan((acc, cur) => acc + cur, 0)
);

export const scan2$ = interval(1000).pipe(
  take(10),
  scan((acc, cur) => [...acc, cur], [])
);

//example 3
export const subject$ = new Subject();

export const scan3$ = subject$.pipe(
  scan((acc, cur) => Object.assign({}, acc, cur), {})
);
