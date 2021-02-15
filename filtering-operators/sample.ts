import { sample, mapTo } from "rxjs/operators";
import { fromEvent, interval, merge } from "rxjs";

export const sample$ = interval(1000).pipe(sample(interval(2000)));

export const sample1$ = merge(
  fromEvent(document, "mousedown").pipe(mapTo(false)),
  fromEvent(document, "mousemove").pipe(mapTo(true))
).pipe(sample(fromEvent(document, "mouseup")));
