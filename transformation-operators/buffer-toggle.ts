import { interval, fromEvent } from "rxjs";
import { bufferToggle } from "rxjs/operators";
export const bufferToggle$ = interval(1000).pipe(
  bufferToggle(interval(3000), val => {
    return fromEvent(document, "click");
  })
); // The opening arguments are a subscribable or a promise to start the buffer and the second argument closingSelector is again subscribable or promise an indicator to close the buffer and emit the values collected.
