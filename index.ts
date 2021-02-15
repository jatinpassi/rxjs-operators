import {
  ignoreElements$,
  ignoreElements1$,
  ignoreElements2$
} from "./filtering-operators/ignore-elements";
ignoreElements$.subscribe(e => console.log("ignoreElements:", e));
ignoreElements1$.subscribe(e => console.log("ignoreElements1:", e));
ignoreElements2$.subscribe(
  e => console.log("ignoreElements2:", e),
  err => console.log(err),
  () => console.log("SECOND COMPLETE!")
);
