import { distinctUntilKeyChanged } from "rxjs/operators";
import { from } from "rxjs";

export const distinctUntilKeyChanged$ = from([
  { name: "Brian" },
  { name: "Joe" },
  { name: "Sue" },
  { name: "Joe" }
]).pipe(distinctUntilKeyChanged("name"));
