import i18next from 'i18next';
import { createI18nStore } from 'svelte-i18next';
import en from './locales/en.json';
import de from './locales/de.json';
import pl from './locales/pl.json';

i18next.init({
	lng: 'en',
	fallbackLng: 'en',
	resources: {
		en: { translation: en },
		de: { translation: de },
		pl: { translation: pl }
	},
	interpolation: {
		escapeValue: false
	}
});

export const i18n = createI18nStore(i18next);
export default i18next;
