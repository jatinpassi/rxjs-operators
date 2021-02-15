import { skipWhile } from "rxjs/operators";
import { interval } from "rxjs";

export const skipWhile$ = interval(1000).pipe(skipWhile(val => val < 5));

export const skipWhile1$ = interval(1000).pipe(skipWhile(val => val > 5)); //not working and print out everything
 