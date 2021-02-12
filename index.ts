import { bufferCount$ } from "./transformation-operators/buffer-count";
bufferCount$.subscribe(data => console.log(data));
