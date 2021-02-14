import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

export const distinct$ = of(1, 2, 3, 4, 5, 1, 2, 3, 8, 4, 6, 7, 4).pipe(
  distinct()
);

export const distinct1$ = from([
  { id: 3, name: "jatin" },
  { id: 4, name: "karan" },
  { id: 5, name: "tofu" },
  { id: 3, name: "yup boy" }
]).pipe(distinct(e => e.id));
