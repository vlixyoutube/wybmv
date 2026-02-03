import { writable } from 'svelte/store';

export type Screen = 'intro' | 'question' | 'success';

export const currentScreen = writable<Screen>('intro');
