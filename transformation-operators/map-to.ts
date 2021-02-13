import { mapTo } from "rxjs/operators";
import { interval } from "rxjs";
//Emits the given constant value on the output Observable every time the source Observable emits a value.
export const mapTo$ = interval(1000).pipe(mapTo("Hi Jatin"));
