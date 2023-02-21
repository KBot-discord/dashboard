<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	function isDarkMode() {
		if (!browser) {
			return false;
		}

		const sessionData = window.sessionStorage.getItem('darkMode');

		if (sessionData) {
			return 'true' === sessionData;
		}

		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	function toggleColorScheme(enableDarkMode = false) {
		if (!browser) {
			return false;
		}

		const sessionData = window.sessionStorage.getItem('darkMode');

		if (sessionData && enableDarkMode === ('true' === sessionData)) {
			return;
		}

		if (enableDarkMode) {
			document.querySelector('html')?.setAttribute('data-theme', 'dark');
		} else {
			document.querySelector('html')?.setAttribute('data-theme', 'light');
		}

		sessionStorage.setItem('darkMode', darkMode.toString());
		return;
	}

	onMount(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			darkMode = e.matches;
		});
	});

	let darkMode = isDarkMode();
	$: toggleColorScheme(darkMode);
</script>

<input
	type="checkbox"
	class="toggle"
	checked={darkMode}
	on:click={() => (darkMode = !darkMode)}
	aria-label="toggle dark mode"
	aria-checked={darkMode}
/>
