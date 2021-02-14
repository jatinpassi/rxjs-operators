import { debounceTime } from "rxjs/operators";
import { fromEvent } from "rxjs";

export const debounceTime$ = fromEvent(
  document.getElementById("myInput"),
  "keyup"
).pipe(debounceTime(1000));
