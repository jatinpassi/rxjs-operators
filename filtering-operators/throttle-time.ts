import { throttleTime } from "rxjs/operators";
import { fromEvent } from "rxjs";

export const throttleTime$ = fromEvent(
  document.getElementById("myInput"),
  "keyup"
).pipe(throttleTime(1000));
