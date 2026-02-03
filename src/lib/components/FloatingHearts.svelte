<script lang="ts">
  let hearts: {
    id: number;
    left: string;
    size: string;
    duration: string;
    drift: string;
    emoji: string;
  }[] = $state([]);
  let heartId = 0;

  const heartEmojis = ["❤️", "💕", "💖", "💗", "💓", "💘", "💝"];

  function createHeart() {
    const id = heartId++;
    const heart = {
      id,
      left: `${Math.random() * 100}%`,
      size: `${1.5 + Math.random() * 2}rem`,
      duration: `${3 + Math.random() * 3}s`,
      drift: `${(Math.random() - 0.5) * 100}px`,
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
    };
    hearts.push(heart);

    // Remove heart after animation completes
    setTimeout(
      () => {
        const index = hearts.findIndex((h) => h.id === id);
        if (index > -1) hearts.splice(index, 1);
      },
      parseFloat(heart.duration) * 1000,
    );
  }

  $effect(() => {
    // Create initial burst of hearts
    for (let i = 0; i < 10; i++) {
      setTimeout(() => createHeart(), i * 200);
    }

    // Continue creating hearts periodically
    const interval = setInterval(createHeart, 500);

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
    };
  });
</script>

{#each hearts as heart (heart.id)}
  <div
    class="floating-heart"
    style="left: {heart.left}; --size: {heart.size}; --duration: {heart.duration}; --drift: {heart.drift};"
  >
    {heart.emoji}
  </div>
{/each}
