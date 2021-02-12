import { interval, fromEvent } from "rxjs";
import { buffer } from "rxjs/operators";

const source$ = fromEvent(document, "click");
export const buffer$ = source$.pipe(buffer(interval(1000)));
