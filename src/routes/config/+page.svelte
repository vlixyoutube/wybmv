<script lang="ts">
	import { i18n } from '$lib/i18n';
	import i18next from '$lib/i18n';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';

	let name = $state('');
	let lang = $state('en');
	let copied = $state(false);

	const languages = [
		{ code: 'en', label: 'English' },
		{ code: 'de', label: 'Deutsch' },
		{ code: 'pl', label: 'Polski' }
	];

	$effect(() => {
		i18next.changeLanguage(lang);
	});

	function getGeneratedUrl() {
		const origin = browser ? window.location.origin : 'https://strehk.github.io';
		const params = new URLSearchParams();
		if (name.trim()) {
			params.set('name', name.trim());
		}
		params.set('lang', lang);
		const queryString = params.toString();
		return `${origin}${base}/?${queryString}`;
	}

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(getGeneratedUrl());
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}

	function openPreview() {
		window.open(getGeneratedUrl(), '_blank');
	}
</script>

<svelte:head>
	<title>WYBMV - Link Generator</title>
</svelte:head>

<div class="w-full max-w-md mx-auto p-4">
	<div class="card">
		<h1 class="text-2xl md:text-3xl font-bold text-center mb-8">
			💕 {$i18n.t('config.title')}
		</h1>

		<div class="space-y-6">
			<!-- Name Input -->
			<div>
				<label for="name" class="block text-sm font-medium mb-2">
					{$i18n.t('config.nameLabel')}
				</label>
				<input
					type="text"
					id="name"
					bind:value={name}
					placeholder={$i18n.t('config.namePlaceholder')}
					class="w-full px-4 py-3 rounded-lg border-2 border-valentine-light-primary dark:border-valentine-dark-primary bg-white dark:bg-valentine-dark-bg text-valentine-light-text dark:text-valentine-dark-text focus:outline-none focus:border-valentine-light-accent dark:focus:border-valentine-dark-accent transition-colors"
				/>
			</div>

			<!-- Language Select -->
			<div>
				<label for="lang" class="block text-sm font-medium mb-2">
					{$i18n.t('config.languageLabel')}
				</label>
				<select
					id="lang"
					bind:value={lang}
					class="w-full px-4 py-3 rounded-lg border-2 border-valentine-light-primary dark:border-valentine-dark-primary bg-white dark:bg-valentine-dark-bg text-valentine-light-text dark:text-valentine-dark-text focus:outline-none focus:border-valentine-light-accent dark:focus:border-valentine-dark-accent transition-colors"
				>
					{#each languages as language}
						<option value={language.code}>{language.label}</option>
					{/each}
				</select>
			</div>

			<!-- Generated URL -->
			<div>
				<p class="block text-sm font-medium mb-2">
					{$i18n.t('config.linkLabel')}
				</p>
				<div class="p-3 rounded-lg bg-valentine-light-primary/20 dark:bg-valentine-dark-primary/20 break-all text-sm font-mono">
					{getGeneratedUrl()}
				</div>
			</div>

			<!-- Action Buttons -->
			<div class="flex gap-4">
				<button
					onclick={copyToClipboard}
					class="flex-1 btn-primary text-base"
				>
					{copied ? $i18n.t('config.copied') : $i18n.t('config.copyLink')}
				</button>
				<button
					onclick={openPreview}
					class="flex-1 btn-secondary text-base"
				>
					{$i18n.t('config.preview')}
				</button>
			</div>
		</div>
	</div>
</div>
