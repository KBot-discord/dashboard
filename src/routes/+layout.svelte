<script lang="ts">
	import '$lib/assets/styles/styles.css';
	import '$lib/assets/styles/globals.css';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
</script>

<div class="app">
	<div class="drawer">
		<input type="checkbox" class="drawer-toggle" id="drawer" />
		<div class="drawer-content flex flex-col overflow-x-clip">
			<Navbar />
			<slot />
			<Footer />
		</div>
		<Sidebar />
	</div>
</div>
