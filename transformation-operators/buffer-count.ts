import { bufferCount } from "rxjs/operators";
import { fromEvent } from "rxjs";

export const bufferCount$ = fromEvent(document, "click").pipe(bufferCount(3));
