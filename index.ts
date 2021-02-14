import { throttle$ } from "./filtering-operators/throttle";
throttle$.subscribe(e => console.log("debounce:", e.target.value));
