import { pairwise$ } from "./combination-operators/pairwise";
pairwise$.subscribe(e => console.log("skip:", e));
