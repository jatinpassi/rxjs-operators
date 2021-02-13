import { interval, fromEvent } from "rxjs";
import { bufferWhen } from "rxjs/operators";

export const bufferWhen$ = interval(1000).pipe(
  bufferWhen(() => {
    return fromEvent(document, "click");
  })
);
