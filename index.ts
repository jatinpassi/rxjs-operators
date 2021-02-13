import { bufferToggle$ } from "./transformation-operators/buffer-toggle";
bufferToggle$.subscribe(buffer => console.log(buffer));
