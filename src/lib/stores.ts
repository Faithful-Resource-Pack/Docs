import { browser } from '$app/env';
import { derived, writable, type Writable } from 'svelte/store'

const THEME_DEFAULT = '0'
let THEME_INITIAL = Number.parseInt(browser ? window.localStorage.getItem('theme') ?? THEME_DEFAULT : THEME_DEFAULT, 10);
// hotfix for the old site's theme breaking the new site completely
if (isNaN(THEME_INITIAL) ) THEME_INITIAL = THEME_DEFAULT as unknown as number
const THEME_VALUES = [
  {
    value: 'auto',
    html: 'Theme: auto'
  },
  {
    value: 'dark',
    html: 'Theme: dark'
  },
  {
    value: 'light',
    html: 'Theme: light'
  }
]

function createStore<T, V>(key: string, default_value: T, parse: (v: string) => T, obj: (v: Writable<T>) => V): V {
    let initial: T;
    if(browser) {
        const val = window.localStorage.getItem(key);
        initial = val ? parse(val) : default_value;
    } else {
        initial = default_value;
    }

    const my_writable = writable(initial);
    my_writable.subscribe(v => {
        if (browser) {
            window.localStorage.setItem(key, String(v));
        }
    });
    return obj(my_writable);
}

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

export const menu_opened = createStore('menu_opened', false, v => v === 'true', writable => {
    const { subscribe, update, set } = writable;

    return {
        subscribe,
        toggle: () => update(v => !v),
        open: () => set(true),
        close: () => set(false),
        set
    }
})

const TOC_CLASS = "toc"
const create_toc_store = () => {
  const { subscribe, set } = writable(false)

  return {
    subscribe,
    update: (target: Element | undefined, url: URL) => {
      console.log("target", target)
      set(target !== undefined && url.pathname !== '/')
    },
    class: TOC_CLASS
  }
}
export const toc = create_toc_store();
