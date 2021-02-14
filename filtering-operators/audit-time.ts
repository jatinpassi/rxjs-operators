import { auditTime } from "rxjs/operators";
import { fromEvent } from "rxjs";

export const auditTime$ = fromEvent(
  document.getElementById("myInput"),
  "keyup"
).pipe(auditTime(1000));
