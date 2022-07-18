import { browser } from '$app/env';
import { derived, writable } from 'svelte/store'

const THEME_DEFAULT = '0'
const THEME_INITIAL = Number.parseInt(browser ? window.localStorage.getItem('theme') ?? THEME_DEFAULT : THEME_DEFAULT, 10);
const THEME_VALUES = [
  {
    value: 'auto',
    html: 'THEME: AUTO'
  },
  {
    value: 'dark',
    html: 'THEME: DARK'
  },
  {
    value: 'light',
    html: 'THEME: LIGHT'
  }
]

function createTheme() {
	const { subscribe, update } = writable(THEME_INITIAL);

	return {
		subscribe,
		next: () => {
      update(i => (i + 1) % THEME_VALUES.length)
    },
	}
}

export const theme_index = createTheme()

theme_index.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('theme', String(value));
  }
});

export const theme = derived(
  theme_index,
  $i => THEME_VALUES[$i].value
)

export const theme_html = derived(
  theme_index,
  $i => THEME_VALUES[$i].html
)

export const menu_opened = writable(false);