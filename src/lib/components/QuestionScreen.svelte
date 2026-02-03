<script lang="ts">
  import { i18n } from "$lib/i18n";
  import { currentScreen } from "$lib/stores/app";
  import RunawayButton from "./RunawayButton.svelte";

  function handleYes() {
    currentScreen.set("success");
  }
</script>

<div
  class="flex flex-col items-center justify-center min-h-[60vh] px-4 animate-fade-in"
>
  <h1
    class="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-16 animate-pulse-heart"
  >
    {$i18n.t("question.title")}
  </h1>

  <div class="grid grid-cols-2 gap-6 w-full max-w-md">
    <button class="btn-primary" onclick={handleYes}>
      {$i18n.t("question.yes")}
    </button>

    <RunawayButton />
  </div>
</div>
