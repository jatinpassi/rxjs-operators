import { skip$ } from "./filtering-operators/skip";
skip$.subscribe(e => console.log("skip:", e));
