import { sample1$ } from "./filtering-operators/sample";
sample1$.subscribe(e => console.log("sample:", e));
