<script lang="ts">
  import { onMount } from "svelte";
  import chroma from "chroma-js";

  export let id: string = "";
  let canvas: HTMLCanvasElement = document.querySelector("#canvas")!;
  let rainbows: HTMLCanvasElement = document.querySelector("#rainbows")!;
  let color = chroma.random().hex();
  let context2D: CanvasRenderingContext2D;
  let rainbows2D: CanvasRenderingContext2D;
  let pixel;
  function Copy(
    e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement },
  ) {
    const input: HTMLInputElement = document.querySelector(id)!;
    input.select();
    input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(input.value);
    return;
  }
  function inputChangeColor(
    e: Event & { currentTarget: EventTarget & HTMLInputElement },
  ) {
    let value = e.currentTarget.value;
    value = value.replace(/[()]/g, "");
    if (value.includes(",")) {
      let Mapvalue = value.split(",").map(Number);
      color = chroma(Mapvalue).hex();
      return;
    }
    color = chroma(value).hex();
    return;
  }

  function drawRainbows() {
    const width = rainbows2D.canvas.width;
    const height = rainbows2D.canvas.height;
    for (let i = 0; i < height; i++) {
      const hue = (i / height) * 360;
      rainbows2D.fillStyle = `hsl(${hue}, 100%, 50%)`;
      rainbows2D.fillRect(0, i, width, 1);
    }
  }

  function drawCanvas() {
    let HorizontalGradient = context2D.createLinearGradient(
      0,
      0,
      context2D.canvas.width,
      0,
    );

    HorizontalGradient.addColorStop(0, "#fff");
    HorizontalGradient.addColorStop(1, color);
    context2D.fillStyle = HorizontalGradient;
    context2D.fillRect(0, 0, context2D.canvas.width, context2D.canvas.height);

    let VeritalGradient = context2D.createLinearGradient(0, 0, 0, 300);
    VeritalGradient.addColorStop(0, "rgba(0, 0, 0, 0)");
    VeritalGradient.addColorStop(1, "#000");
    context2D.fillStyle = VeritalGradient;
    context2D.fillRect(0, 0, context2D.canvas.width, context2D.canvas.height);
  }
  onMount(() => {
    context2D = canvas.getContext("2d")!;
    rainbows2D = rainbows.getContext("2d")!;
    drawCanvas();
    drawRainbows();
  });

  function clickEvent(
    e: MouseEvent & { currentTarget: EventTarget & HTMLCanvasElement },
  ) {
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    drawCanvas();
    pixel = context2D.getImageData(x, y, 1, 1).data;
    color = chroma([pixel[0], pixel[1], pixel[2]]).hex();
    drawMarker(x, y);
  }
  function drawMarker(x: number, y: number) {
    context2D.strokeStyle = "white";
    context2D.lineWidth = 2;
    context2D.beginPath();
    context2D.arc(x, y, 5, 0, 2 * Math.PI);
    context2D.stroke();
  }
  function mouseEventRainbows(
    e: MouseEvent & { currentTarget: EventTarget & HTMLCanvasElement },
  ) {
    let rect = rainbows.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    pixel = rainbows2D.getImageData(x, y, 1, 1).data;
    color = chroma([pixel[0], pixel[1], pixel[2]]).hex();
    rainbowsMarker(x, y);
    drawCanvas();
    drawRainbows();
  }
  function rainbowsMarker(x: number, y: number) {
    rainbows2D.strokeStyle = "white";
    rainbows2D.lineWidth = 2;
    rainbows2D.beginPath();
    rainbows2D.arc(x, y, 5, 0, 2 * Math.PI);
    rainbows2D.stroke();
  }
</script>

<div class="flex flex-col rounded-md shadow-md p-1 bg-white">
  <div class="flex flex-row gap-2 p-1 m-1">
    <canvas
      height="200"
      width="200"
      id="canvas"
      class=""
      bind:this={canvas}
      on:click={clickEvent}
    >
    </canvas>
    <canvas
      width="30"
      height="200"
      id="rainbows"
      class="border-black border-2 rounded-md"
      bind:this={rainbows}
      on:mousemove={mouseEventRainbows}
    ></canvas>
  </div>
  <div class="flex flex-row justify-center items-center gap-1">
    <input
      type="text"
      bind:value={color}
      on:input={inputChangeColor}
      {id}
      class="border border-black text-center"
    />
    <button class="rounded-md border w-fit h-fit p-1" on:click={Copy}>
      copy
    </button>
  </div>
</div>
