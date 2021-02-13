import { endWith, take } from "rxjs/operators";
import { interval } from "rxjs";

export const endWith$ = interval(1000).pipe(
  take(5),
  endWith(45)
);
