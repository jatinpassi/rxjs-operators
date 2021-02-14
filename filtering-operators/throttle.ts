import { throttle } from "rxjs/operators";
import { fromEvent, interval } from "rxjs";

//throttle vs debouncing
//The main difference between throttling and debouncing is that throttling executes the function at a regular interval, while debouncing executes the function only after some cooling period.

export const throttle$ = fromEvent(
  document.getElementById("myInput"),
  "keyup"
).pipe(throttle(() => interval(1000)));
