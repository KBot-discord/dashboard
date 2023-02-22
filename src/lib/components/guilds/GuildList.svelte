<script lang="ts">
	import GuildListItem from './GuildListItem.svelte';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import type { IGuild } from '$lib/types/guild';

	export let guilds: IGuild[];
</script>

<div class="justify-center flex flex-wrap w-full">
	{#each guilds as guild (guild.id)}
		<span in:fade animate:flip={{ duration: 200 }}>
			<GuildListItem {guild} />
		</span>
	{/each}
	<div class="flex-col m-3 w-min">
		<a href="/invite" class="avatar placeholder" target="_blank" rel="noreferrer">
			<div
				class="cursor-pointer w-32 bg-neutral rounded-[50%] transition-radius ease-in-out duration-[225ms] hover:rounded-[35%]"
			>
				<span class="text-5xl text-neutral-content">+</span>
			</div>
		</a>
		<span class="mt-2 text-center text-neutral-content">Add a new server</span>
	</div>
</div>
