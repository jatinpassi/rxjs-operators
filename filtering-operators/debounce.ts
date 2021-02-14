import { interval, timer, fromEvent } from "rxjs";
import { debounce, take } from "rxjs/operators";

export const debounce$ = fromEvent(
  document.getElementById("myInput"),
  "keyup"
).pipe(debounce(() => timer(500)));

export const debounce1$ = interval(1000).pipe(
  take(10),
  debounce(() => interval(1000))
);
