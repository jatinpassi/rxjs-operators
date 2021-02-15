import { first$, first1$,first2$ } from "./filtering-operators/first";
first$.subscribe(e => console.log("first:", e));
first1$.subscribe(e => console.log("first1:", e));
first2$.subscribe(e => console.log("first2:", e));
