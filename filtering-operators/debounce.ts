import { interval, timer, fromEvent } from "rxjs";
import { debounce, take } from "rxjs/operators";

//throttle vs debouncing
//The main difference between throttling and debouncing is that throttling executes the function at a regular interval, while debouncing executes the function only after some cooling period.

export const debounce$ = fromEvent(
  document.getElementById("myInput"),
  "keyup"
).pipe(debounce(() => timer(500)));

export const debounce1$ = interval(1000).pipe(
  take(10),
  debounce(() => interval(1000))
);
