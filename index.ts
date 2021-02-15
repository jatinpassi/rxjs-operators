import { last$, last1$ } from "./filtering-operators/last";
last$.subscribe(e => console.log("ignoreElements:", e));
last1$.subscribe(e => console.log("ignoreElements:", e));
