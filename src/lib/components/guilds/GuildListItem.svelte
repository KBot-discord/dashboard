<script lang="ts">
	import type { IGuild } from '$lib/types/guild';

	export let guild: IGuild;

	let guildInitials: string;
	if (!guild.icon) {
		const allNames = guild.name.trim().split(' ');
		guildInitials = allNames.reduce((acc, curr, index) => {
			if (index === 0 || index === allNames.length - 1) {
				acc = `${acc}${curr.charAt(0).toUpperCase()}`;
			}
			return acc;
		}, '');
	}
</script>

<div class="avatar placeholder flex-col m-1 xs:m-3 w-min text-neutral-content">
	<a
		href={`/guilds/${guild.id}`}
		class="cursor-pointer bg-neutral text-5xl rounded-[50%] transition-radius ease-in-out duration-[225ms] hover:rounded-[35%]"
	>
		{#if guild.icon}
			<div>
				<img height={128} width={128} src={guild.icon} alt={'Guild icon'} />
			</div>
		{:else}
			<div class="flex w-32 h-32 items-center justify-center">
				{guildInitials}
			</div>
		{/if}
	</a>
	<span class="mt-2 text-center">{guild.name}</span>
</div>
