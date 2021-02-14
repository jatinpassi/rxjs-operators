import { audit$ } from "./filtering-operators/audit";
audit$.subscribe(e => console.log("audit:", e.target.value));
