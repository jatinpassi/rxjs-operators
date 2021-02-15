import { pairwise, take } from "rxjs/operators";
import { interval } from "rxjs";

export const pairwise$ = interval(1000).pipe(
  take(5),
  pairwise()
);
