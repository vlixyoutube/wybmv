<script lang="ts">
  import { i18n } from "$lib/i18n";
  import FloatingHearts from "./FloatingHearts.svelte";
</script>

<FloatingHearts />

<div
  class="flex flex-col items-center justify-center min-h-[60vh] px-4 animate-fade-in relative z-10"
>
  <p class="text-6xl md:text-8xl mb-8 animate-pulse-heart">
    {$i18n.t("success.aww")} 💕
  </p>

  <h1
    class="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8 animate-slide-up"
  >
    {$i18n.t("success.iLoveYou")}
  </h1>

  <p
    class="text-xl md:text-2xl text-center opacity-80 animate-slide-up"
    style="animation-delay: 0.3s;"
  >
    {$i18n.t("success.hearts")}
  </p>
</div>
