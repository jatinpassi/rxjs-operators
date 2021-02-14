import { distinct$, distinct1$ } from "./filtering-operators/distinct";
distinct$.subscribe(e => console.log("distinct:", e));
distinct1$.subscribe(e => console.log("distinct:", e));
