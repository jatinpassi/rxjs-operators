import { single } from "rxjs/operators";
import { from } from "rxjs";

export const single$ = from([1, 2, 3, 4, 5, 6, 7, 8]).pipe(single()); // will not emit anything

export const single1$ = from([1]).pipe(single()); //emit 1

export const single2$ = from([1, 2, 3, 4, 5, 6]).pipe(single(val => val == 4)); //emit 4

export const single3$ = from([1, 2, 3, 4, 5, 6, 7, 8]).pipe(
  single(val => val % 4 == 0)
); //will not emit anything
