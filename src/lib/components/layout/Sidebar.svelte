<script lang="ts">
	import DiscordIcon from '$lib/assets/images/discord.svelte';
	import GithubIcon from '$lib/assets/images/github.svelte';
	import PlusIcon from '$lib/assets/images/plus.svelte';
</script>

<div class="drawer-side border-r border-neutral">
	<label for="drawer" class="drawer-overlay" />
	<div class="flex h-full w-[200px] bg-primary py-16">
		<ul class="menu flex-1 bg-base-100 text-base-100-content">
			<li>
				<a target="_blank" rel="noreferrer" href="https://docs.kbot.ca">
					<span>
						<GithubIcon />
					</span>
					Docs
				</a>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="/invite">
					<span>
						<PlusIcon />
					</span>
					Add to Server
				</a>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="/discord">
					<span>
						<DiscordIcon />
					</span>
					Discord Server
				</a>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="/github">
					<span>
						<GithubIcon />
					</span>
					Source Code
				</a>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="https://status.kbot.ca/">
					<span>
						<GithubIcon />
					</span>
					Status
				</a>
			</li>
		</ul>
	</div>
</div>