<script lang="ts">
  import { i18n } from "$lib/i18n";
  import { currentScreen } from "$lib/stores/app";
  import { onMount } from "svelte";

  interface Props {
    name?: string | null;
  }

  let { name }: Props = $props();

  let currentSlide = $state(0);
  let isVisible = $state(true);

  const slides = [
    "intro.slide1",
    "intro.slide2",
    "intro.slide3",
    "intro.slide4",
  ];

  function nextSlide() {
    isVisible = false;
    setTimeout(() => {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        isVisible = true;
      } else {
        currentScreen.set("question");
      }
    }, 300);
  }

  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 100);
  });
</script>

<div
  class="flex flex-col items-center justify-center min-h-[60vh] px-4 cursor-pointer select-none"
  onclick={nextSlide}
  onkeydown={(e) => e.key === "Enter" && nextSlide()}
  role="button"
  tabindex="0"
>
  <p
    class="text-2xl md:text-4xl lg:text-5xl text-center max-w-2xl leading-relaxed transition-all duration-500 text-valentine-light-text dark:text-valentine-dark-text"
    class:opacity-0={!isVisible}
    class:opacity-100={isVisible}
    class:translate-y-4={!isVisible}
    class:translate-y-0={isVisible}
  >
    {$i18n.t(slides[currentSlide], {
      name: name || $i18n.t("defaultName"),
    })}
  </p>

  <div class="mt-12 flex gap-2">
    {#each slides as _, index}
      <div
        class="w-2 h-2 rounded-full transition-all duration-300"
        class:bg-valentine-light-accent={index === currentSlide}
        class:dark:bg-valentine-dark-accent={index === currentSlide}
        class:bg-valentine-light-primary={index !== currentSlide}
        class:dark:bg-valentine-dark-primary={index !== currentSlide}
        class:scale-125={index === currentSlide}
      ></div>
    {/each}
  </div>

  <p class="mt-8 text-sm opacity-50 animate-pulse">
    {$i18n.t("intro.tapToContinue")}
  </p>
</div>
