<script lang="ts">
    import { decode } from "blurhash";
    // @ts-ignore
    import Waypoint from "svelte-waypoint";
  
    export let alt = "";
    export let width = "";
    export let height = "";
    export let usemap = "";
    export let src = "";
    export let srcset = "";
    export let srcsetWebp = "";
    export let ratio = "100%";
    export let sizes = "(max-width: 1000px) 100vw, 1000px";
    export let offset = 0;
    export let threshold = 1.0;
    export let lazy = true;
    export let placeholderClass = "";
    export let blurhash = "";
    export let blurhashSize: { width: number; height: number; } | null = null;
  
    let className = "";
    export { className as class };
  
    let loaded = !lazy;
  
    function load(img: HTMLImageElement) {
      img.onload = () => (loaded = true);
    }
  
    function decodeBlurhash(canvas: HTMLCanvasElement) {
      if(!blurhashSize) return;
      const pixels = decode(blurhash, blurhashSize.width, blurhashSize.height);
      const ctx = canvas.getContext('2d');
      if(!ctx) return;
      const imageData = ctx.createImageData(blurhashSize.width, blurhashSize.height);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
    }
  </script>
  
  <style>
    img, canvas {
      object-position: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      will-change: opacity;
    }
  
    .placeholder {
      opacity: 1;
      width: 100%;
      height: 100%;
    }
  
    .main {
      opacity: 0;
    }
  
    .loaded .placeholder {
      opacity: 0;
    }
  
    .loaded .main {
      opacity: 1;
    }
  </style>
  
<div style="width: {width}px; max-width: 100%; aspect-ratio: {width}/{height}; margin: 0 auto;">
  <Waypoint
    once
    {threshold}
    {offset}
    disabled="{!lazy}"
  >  
    <div class:loaded style="position: relative; margin: 0 auto;">
      <div class="{className}" style="position: relative; overflow: hidden; width: {width}px; max-width: 100%; aspect-ratio: {width}/{height}">
        <div style="padding-bottom:{ratio};"></div>
        {#if blurhash && blurhashSize}
          <canvas class="placeholder" use:decodeBlurhash width={blurhashSize.width} height={blurhashSize.height} />
        {:else}
          <img class="placeholder {placeholderClass}" {src} {alt} />
        {/if}
        <picture>
          <source type="image/webp" srcset="{srcsetWebp}" {sizes} />
          <source {srcset} {sizes} />
          <img
            {src}
            use:load
            class="main"
            {alt}
            {usemap}
          />
        </picture>
      </div>
    </div>
  </Waypoint>
</div>
  