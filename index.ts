import { skipUntil$ } from "./filtering-operators/skip-until";
skipUntil$.subscribe(e => console.log("skip:", e));
