import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import inlineSvg from 'rollup-plugin-inline-svg';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js'
	},
	plugins: [
		svelte({
            hydratable: true,
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('public/bundle.css');
			}
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),

        inlineSvg({
            // Removes specified tags and its children. You can specify tags by setting removingTags query array.
            // default: false
            removeTags: false,

            // warning: this won't work unless you specify removeTags: true
            // default: ['title', 'desc', 'defs', 'style']
            removingTags: ['title', 'desc', 'defs', 'style'],

            // warns about present tags, ex: ['desc', 'defs', 'style']
            // default: []
            warnTags: [],

            // Removes `width` and `height` attributes from <svg>.
            // default: true
            removeSVGTagAttrs: true,

            // Removes attributes from inside the <svg>.
            // default: []
            removingTagAttrs: [],

            // Warns to console about attributes from inside the <svg>.
            // default: []
            warnTagAttrs: []
        }),

		commonjs(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
