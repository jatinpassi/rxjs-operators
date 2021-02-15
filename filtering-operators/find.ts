import { find, mapTo } from "rxjs/operators";
import { interval, fromEvent } from "rxjs";

// If you always want the first item emitted, regardless of condition.
export const find$ = interval(1000).pipe(find(ele => ele % 5 === 0));

export const find1$ = fromEvent(
  document.getElementById("myInput"),
  "keyup"
).pipe(
  find((e: any) => e.target.value === "jatin"),
  mapTo("Found")
);
