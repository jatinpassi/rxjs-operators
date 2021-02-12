import { bufferTime$ } from "./transformation-operators/buffer-time";
bufferTime$.subscribe(buffer =>
  buffer.map((e: any) => console.log(e.target.value))
);
