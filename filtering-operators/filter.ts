import { filter } from "rxjs/operators";
import { interval } from "rxjs";

export const filter$ = interval(1000).pipe(filter(i => i < 5));
