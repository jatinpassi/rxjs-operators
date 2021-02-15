import { skipWhile$ } from "./filtering-operators/skip-while";
skipWhile$.subscribe(e => console.log("skip:", e));
