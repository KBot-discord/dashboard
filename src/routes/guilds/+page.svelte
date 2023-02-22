<script lang="ts">
	import type { IGuild } from '$lib/types/guild';
	import Meta from '$lib/components/Meta.svelte';
	import GuildList from '$lib/components/guilds/GuildList.svelte';

	let guilds: IGuild[];
	let guildFilter = '';

	guilds = [
		{ id: '1', name: 'Guild 1', icon: '', owner: true },
		{ id: '2', name: 'Guild 2', icon: '', owner: true },
		{ id: '3', name: 'Guild 3', icon: '', owner: true },
		{ id: '4', name: 'Guild 4', icon: '', owner: true },
		{ id: '5', name: 'Guild 5', icon: '', owner: true }
	];

	$: filteredGuilds = guilds.filter((guild) => guild.name.indexOf(guildFilter) !== -1);
</script>

<Meta title="Manage Guilds" />

<div class="card bg-base-100 text-base-content shadow-xl rounded-lg border border-neutral">
	<div
		class="flex flex-col gap-2 xs:flex-row justify-between bg-neutral text-neutral-content rounded-t-lg z-50 p-3 w-full"
	>
		<h2 class="card-title text-2xl w-min pl-2">Guilds</h2>
		<form class="max-w-xs">
			<input
				type="text"
				id="serverFilter"
				name="serverFilter"
				placeholder="Search for a server"
				class="input input-bordered w-full "
				bind:value={guildFilter}
			/>
		</form>
	</div>
	<div class="card-body rounded-b-lg p-5 gap-3 w-[90vw] lg:max-w-[60vw]">
		<GuildList guilds={filteredGuilds} />
	</div>
</div>
