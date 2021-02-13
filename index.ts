import { of2$ } from "./creation-operators/of";
of2$.subscribe(data => {
  if (typeof data === "function") {
    data();
  }
});
