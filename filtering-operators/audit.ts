import { audit } from "rxjs/operators";
import { fromEvent, interval } from "rxjs";

export const audit$ = fromEvent(
  document.getElementById("myInput"),
  "keyup"
).pipe(audit(() => interval(1000)));
