# BeerStash

A game inspired by Geocaching, ideal for a birthday present :) One hides "stashes" (we did it with beers) and places the coordinates (or puzzles to find coordinates) on a Prepr CMS instance. The site will load these from Prepr and show them on a map.

## TODO

- [ ] Documentation for Prepr models
- [ ] Change it to use SvelteKit
- [ ] Use environment variables for the tokens/keys

## Usage

Create a file `src/main.js` and give it these contents to make it work locally with `npm run start:dev`:

```
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		ready: false,
		authToken: '<INSERT_PREPR_AUTH_TOKEN_HERE>',
		googleAPIkey: '<INSERT_GOOGLE_API_KEY_HERE>',
	},
});

window.initMap = function ready() {
	app.$set({ ready: true });
};

export default app;
```
