import { of } from "rxjs";
import { distinct } from "rxjs/operators";

export const distinct$ = of(1, 2, 3, 4, 5, 1, 2, 3,8, 4, 6, 7, 4).pipe(
  distinct()
);
