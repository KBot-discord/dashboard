<script lang="ts">
	import ThemeToggle from '../ThemeToggle.svelte';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import DiscordIcon from '$lib/assets/images/discord.svelte';
	import GithubIcon from '$lib/assets/images/github.svelte';
	import PlusIcon from '$lib/assets/images/plus.svelte';
	import logo from '$lib/assets/images/logo.png';
	import { page } from '$app/stores';
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
				<span>
					<PlusIcon />
				</span>
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
				<span>
					<PlusIcon />
				</span>
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
				<span>
					<DiscordIcon />
				</span>
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
				<span>
					<GithubIcon />
				</span>
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
				<span>
					<GithubIcon />
				</span>
			</div>
		</a>
	</div>
	<ThemeToggle />
	<div class="signedInStatus">
		<p class="nojs-show loaded">
			{#if $page.data.session}
				{#if $page.data.session.user?.image}
					<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
				{/if}
				<span class="signedInText">
					<small>Signed in as</small><br />
					<strong>{$page.data.session.user?.email ?? $page.data.session.user?.name}</strong>
				</span>
				<button
					class="buttonPrimary"
					data-sveltekit-preload-data="off"
					on:click={() => signOut('discord')}
				>
					Sign out
				</button>
			{:else}
				<span class="notSignedInText">You are not signed in</span>
				<button
					class="buttonPrimary"
					data-sveltekit-preload-data="off"
					on:click={() => signIn('discord')}
				>
					Sign in
				</button>
			{/if}
		</p>
	</div>
</nav>

<style lang="postcss">
	.nojs-show {
		opacity: 1;
		top: 0;
	}
	.signedInStatus {
		display: block;
		min-height: 4rem;
	}
	.loaded {
		position: relative;
		top: 0;
		opacity: 1;
		overflow: hidden;
		border-radius: 0 0 0.6rem 0.6rem;
		padding: 0.6rem 1rem;
		margin: 0;
		background-color: rgba(0, 0, 0, 0.05);
		transition: all 0.2s ease-in;
	}
	.signedInText,
	.notSignedInText {
		position: absolute;
		padding-top: 0.8rem;
		left: 1rem;
		right: 6.5rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		display: inherit;
		z-index: 1;
		line-height: 1.3rem;
	}
	.signedInText {
		padding-top: 0;
		left: 4.6rem;
	}
	.avatar {
		border-radius: 2rem;
		float: left;
		height: 2.8rem;
		width: 2.8rem;
		background-color: white;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.buttonPrimary {
		background-color: #346df1;
		border-color: #346df1;
		color: #fff;
		text-decoration: none;
		padding: 0.7rem 1.4rem;
	}
	.buttonPrimary:hover {
		box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.2);
	}
</style>
