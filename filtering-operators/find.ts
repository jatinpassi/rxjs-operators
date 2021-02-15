import { find } from "rxjs/operators";
import { interval } from "rxjs";

// If you always want the first item emitted, regardless of condition.
export const find$ = interval(1000).pipe(find(ele => ele % 5 === 0));
