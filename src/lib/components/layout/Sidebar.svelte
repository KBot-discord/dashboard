<script lang="ts">
	import BookIcon from '$lib/assets/images/book.svelte';
	import DiscordIcon from '$lib/assets/images/discord.svelte';
	import GithubIcon from '$lib/assets/images/github.svelte';
	import HeartIcon from '$lib/assets/images/heart.svelte';
	import PlusIcon from '$lib/assets/images/plus.svelte';
</script>

<div class="drawer-side border-r border-neutral">
	<label for="drawer" class="drawer-overlay" />
	<div class="flex h-full w-[200px] bg-primary py-16">
		<ul class="menu flex-1 bg-base-100 text-base-100-content">
			<li>
				<a target="_blank" rel="noreferrer" href="https://docs.kbot.ca">
					<BookIcon height={16} width={16} />
					Docs
				</a>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="/invite">
					<PlusIcon height={16} width={16} />
					Add to Server
				</a>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="/discord">
					<DiscordIcon height={18} width={20} />
					Discord Server
				</a>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="/github">
					<GithubIcon height={18} width={18} />
					Source Code
				</a>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="https://status.kbot.ca/">
					<HeartIcon height={18} width={18} />
					Status
				</a>
			</li>
		</ul>
	</div>
</div>
