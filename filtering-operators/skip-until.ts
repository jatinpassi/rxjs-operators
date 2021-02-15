import { skipUntil } from "rxjs/operators";
import { interval } from "rxjs";

export const skipUntil$ = interval(1000).pipe(skipUntil(interval(6000)));
