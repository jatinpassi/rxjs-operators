import { interval, concat, range } from "rxjs";
import { take } from "rxjs/operators";
export const concat$ = concat(interval(1000).pipe(take(9)), range(1, 10));
