import { skip } from "rxjs/operators";
import { interval } from "rxjs";

export const skip$ = interval(1000).pipe(skip(4));
