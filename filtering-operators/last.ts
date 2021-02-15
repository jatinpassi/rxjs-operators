import { of } from "rxjs";
import { last } from "rxjs/operators";

export const last$ = of(1, 2, 3, 4, 5, 6).pipe(last());
export const last1$ = of(1, 2, 3, 4, 5, 6).pipe(last(e => e % 5 === 0));
