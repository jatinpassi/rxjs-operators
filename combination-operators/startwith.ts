import { startWith, take } from "rxjs/operators";
import { interval } from "rxjs";

export const startWith$ = interval(1000).pipe(
  take(8),
  startWith("999")
);
