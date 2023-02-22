<script lang="ts">
	import ThemeToggle from '../ThemeToggle.svelte';
	import BookIcon from '$lib/assets/images/book.svelte';
	import DiscordIcon from '$lib/assets/images/discord.svelte';
	import GithubIcon from '$lib/assets/images/github.svelte';
	import HeartIcon from '$lib/assets/images/heart.svelte';
	import PlusIcon from '$lib/assets/images/plus.svelte';
	import logo from '$lib/assets/images/logo.png';
</script>

<nav class="navbar sticky top-0 z-50 h-16 w-full bg-primary shadow-md text-primary-content gap-2">
	<div class="flex flex-1 gap-2">
		<span
			class="lg:hidden tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
			data-tip="Menu"
		>
			<label for="drawer" class="btn btn-square btn-ghost drawer-button">
				<svg
					width="20"
					height="20"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-6 w-6 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</label>
		</span>
		<span
			class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)] lg:px-4"
			data-tip="Home"
		>
			<a href="/" class="flex">
				<img height={48} width={48} src={logo} alt="logo" />
			</a>
		</span>
		<a
			target="_blank"
			rel="noreferrer"
			href="https://docs.kbot.ca"
			class="hidden lg:flex nav-button lg:w-min lg:px-4 darken-bg-30"
		>
			<div class="flex justify-center items-center gap-2 mx-auto">
				<span class="hidden lg:flex">Docs</span>
				<BookIcon height={16} width={16} />
			</div>
		</a>
		<a
			target="_blank"
			rel="noreferrer"
			href="/invite"
			class="hidden lg:flex nav-button lg:w-min lg:px-4 darken-bg-30"
		>
			<div class="flex justify-center items-center gap-2 mx-auto">
				<span class="hidden lg:flex">Add to Server</span>
				<PlusIcon height={16} width={16} />
			</div>
		</a>
		<a
			target="_blank"
			rel="noreferrer"
			href="/discord"
			class="hidden lg:flex nav-button lg:w-min lg:px-4 darken-bg-30"
		>
			<div class="flex justify-center items-center gap-2 mx-auto">
				<span class="hidden lg:flex">Discord Server</span>
				<DiscordIcon height={18} width={20} />
			</div>
		</a>
		<a
			target="_blank"
			rel="noreferrer"
			href="https://github.com/KBot-discord/KBot"
			class="hidden lg:flex nav-button lg:w-min lg:px-4 darken-bg-30"
		>
			<div class="flex justify-center items-center gap-2 mx-auto">
				<span class="hidden lg:flex">Source Code</span>
				<GithubIcon height={18} width={18} />
			</div>
		</a>
		<a
			target="_blank"
			rel="noreferrer"
			href="https://status.kbot.ca/"
			class="hidden lg:flex nav-button lg:w-min lg:px-4 darken-bg-30"
		>
			<div class="flex justify-center items-center gap-2 mx-auto">
				<span class="hidden lg:flex">Status</span>
				<HeartIcon height={18} width={18} />
			</div>
		</a>
	</div>
	<ThemeToggle />
</nav>
