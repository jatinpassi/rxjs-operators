import { fromEvent, timer } from "rxjs";
import { bufferTime, debounce, distinctUntilChanged } from "rxjs/operators";

const myInput = document.getElementById("myInput");

export const bufferTime$ = fromEvent(myInput, "keyup").pipe(
  bufferTime(3000),
  debounce(() => timer(2000))
);
