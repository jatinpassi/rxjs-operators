import { first } from "rxjs/operators";
import { of } from "rxjs";

export const first$ = of(1, 2, 3, 4, 5, 67, 89, 90).pipe(first());
export const first1$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(first(e => e > 5));
export const first2$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
  first(e => e > 50, "Nothing")
);
