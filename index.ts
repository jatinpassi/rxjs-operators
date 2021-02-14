import { debounce$, debounce1$ } from "./filtering-operators/debounce";
debounce$.subscribe(e => console.log("debounce:", e.target.value));
debounce1$.subscribe(val => console.log("debounce 1:", val));
