import { throttle } from "rxjs/operators";
import { fromEvent, interval } from "rxjs";

export const throttle$ = fromEvent(
  document.getElementById("myInput"),
  "keyup"
).pipe(throttle(() => interval(1000)));
