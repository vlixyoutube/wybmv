<script lang="ts">
  import { onMount } from "svelte";
  import i18next from "$lib/i18n";
  import { currentScreen } from "$lib/stores/app";
  import { queryParameters } from "sveltekit-search-params";
  import IntroSlideshow from "$lib/components/IntroSlideshow.svelte";
  import QuestionScreen from "$lib/components/QuestionScreen.svelte";
  import SuccessScreen from "$lib/components/SuccessScreen.svelte";

  let screen = $state<"intro" | "question" | "success">("intro");

  const params = queryParameters({
    lang: true,
    name: true,
  });

  currentScreen.subscribe((value) => {
    screen = value;
  });

  $effect(() => {
    if ($params.lang && ["en", "de", "pl"].includes($params.lang)) {
      i18next.changeLanguage($params.lang);
    }
  });
</script>

<svelte:head>
  <title>WYBMV?</title>
</svelte:head>

<div class="w-full max-w-4xl mx-auto">
  {#if screen === "intro"}
    <IntroSlideshow name={$params.name} />
  {:else if screen === "question"}
    <QuestionScreen />
  {:else if screen === "success"}
    <SuccessScreen />
  {/if}
</div>
