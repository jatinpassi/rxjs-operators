import { distinctUntilChanged } from "rxjs/operators";
import { of } from "rxjs";

export const distinctUntilChanged$ = of(1, 1, 2, 2, 4, 3, 5, 4, 1, 2, 3, 45).pipe(
  distinctUntilChanged()
);
