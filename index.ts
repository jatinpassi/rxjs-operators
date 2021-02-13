import { bufferWhen$ } from "./transformation-operators/buffer-when";
bufferWhen$.subscribe(val=>console.log(val))