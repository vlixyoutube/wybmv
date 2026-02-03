# WYBMV - Will You Be My Valentine?

A sweet, romantic single-page app to ask your special someone to be your Valentine. Features a beautiful animated experience with a playful twist - the "No" button runs away when you try to click it!

## [Create Your Personalized Link](https://strehk.github.io/wybmv/config)

Use the **[Link Generator](https://strehk.github.io/wybmv/config)** to create a custom URL with your crush's name and preferred language, then share it with them!

## Features

- **Animated Intro Slideshow** - Beautiful text animations that build anticipation
- **Runaway "No" Button** - The "No" button escapes when hovered, because rejection is not an option!
- **Floating Hearts** - Celebratory heart animations on the success screen
- **Personalized Experience** - Add their name via URL parameter (`?name=Julia`)
- **Multi-language Support** - Available in English, German, and Polish (`?lang=en|de|pl`)
- **Dark Mode** - Automatically adapts to system preference
- **Mobile Friendly** - Responsive design that works on all devices
- **Link Generator** - Easy-to-use config page to create shareable links

## How It Works

1. **Create a link** using the [Config Page](https://strehk.github.io/wybmv/config)
2. **Send the link** to your Valentine
3. They'll see a personalized slideshow with their name
4. When asked "Will you be my Valentine?":
   - **Yes** → Floating hearts and a love message
   - **No** → Good luck catching that button!

## URL Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `name` | Their name (optional) | `?name=Julia` |
| `lang` | Language: `en`, `de`, or `pl` (default: `en`) | `?lang=de` |

**Example:** `https://strehk.github.io/wybmv/?name=Julia&lang=en`

## Tech Stack

- **[SvelteKit](https://kit.svelte.dev/)** - Web framework with static adapter
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling with custom romantic color palette
- **[i18next](https://www.i18next.com/)** - Internationalization
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime & package manager

## Development

### Prerequisites

- [Bun](https://bun.sh/) installed

### Setup

```bash
# Clone the repository
git clone https://github.com/Strehk/wybmv.git
cd wybmv

# Install dependencies
bun install

# Start development server
bun run dev
```

### Build

```bash
# Build for production
bun run build

# Preview production build
bun run preview
```

## Color Palette

**Light Mode:**
- Background: `#FFF5F7` (soft blush)
- Primary: `#F9A8D4` (pink-300)
- Accent: `#EC4899` (pink-500)
- Text: `#831843` (pink-900)

**Dark Mode:**
- Background: `#1F1118` (deep burgundy)
- Primary: `#BE185D` (pink-700)
- Accent: `#F472B6` (pink-400)
- Text: `#FDF2F8` (pink-50)

## Adding a New Language

1. Create a new locale file in `src/lib/i18n/locales/` (e.g., `fr.json`)
2. Copy the structure from `en.json` and translate all strings
3. Register the locale in `src/lib/i18n/index.ts`
4. Add the language option to the config page in `src/routes/config/+page.svelte`

## License

[MIT](LICENSE) - Feel free to use this for your own Valentine's Day proposal!

---

Made with ❤️ | [GitHub: Strehk](https://github.com/Strehk)
