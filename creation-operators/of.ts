import { of } from "rxjs";
import { startWith } from "rxjs/operators";
export const of$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
  startWith(0, "jatin passi")
);

export const of2$ = of({ name: "jatin" }, [0, 1, 2, 3], function() {
  console.log("hi daiya");
});
