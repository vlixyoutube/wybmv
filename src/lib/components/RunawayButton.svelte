<script lang="ts">
	import { i18n } from '$lib/i18n';

	let buttonEl: HTMLButtonElement;
	let translateX = $state(0);
	let translateY = $state(0);
	let hasEscaped = $state(false);

	function runAway() {
		if (!buttonEl) return;

		const rect = buttonEl.getBoundingClientRect();
		const padding = 50;
		const buttonWidth = rect.width;
		const buttonHeight = rect.height;

		// Calculate random target position on screen
		const targetX = padding + Math.random() * (window.innerWidth - buttonWidth - padding * 2);
		const targetY = padding + Math.random() * (window.innerHeight - buttonHeight - padding * 2);

		// Calculate translation needed from current position
		translateX = targetX - rect.left + translateX;
		translateY = targetY - rect.top + translateY;

		hasEscaped = true;
	}

	function handleTouchStart(e: TouchEvent) {
		e.preventDefault();
		runAway();
	}
</script>

<!-- Wrapper maintains grid cell size -->
<div class="relative min-h-[60px]">
	<!-- Invisible placeholder to maintain size -->
	<div class="btn-secondary invisible" aria-hidden="true">
		{$i18n.t('question.no')}
	</div>

	<!-- Actual button -->
	<button
		bind:this={buttonEl}
		class="btn-secondary absolute inset-0 transition-transform duration-200"
		class:!inset-auto={hasEscaped}
		style={hasEscaped ? `transform: translate(${translateX}px, ${translateY}px); z-index: 100;` : ''}
		onmouseenter={runAway}
		ontouchstart={handleTouchStart}
	>
		{$i18n.t('question.no')}
	</button>
</div>
