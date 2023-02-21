<script lang="ts">
	import logo from '$lib/assets/images/logo.png';
</script>

<footer class="bg-primary text-center text-primary-content font-semibold py-8 grid grid-cols-3">
	<div class="m-auto">
		<a href="/" class="flex">
			<img
				height={100}
				width={100}
				src={logo}
				alt={'Main logo'}
			/>
		</a>
	</div>
	<div>
		<h2 class="mb-3 text-md uppercase">Links</h2>
		<ul class="list-none">
			<li class="mb-3">
				<a
					href="https://ko-fi.com/killbasa"
					target="_blank"
					rel="noreferrer"
					class="hover:brightness-[0.7]"
				>
					Donations
				</a>
			</li>
		</ul>
	</div>
	<div>
		<h2 class="mb-3 text-md uppercase">Legal</h2>
		<ul class="list-none">
			<li class="mb-3">
				<a href="/terms" class="hover:brightness-[0.7]">
					Terms of Use
				</a>
			</li>
			<li class="mb-3">
				<a href="/privacy" class="hover:brightness-[0.7]">
					Privacy Policy
				</a>
			</li>
		</ul>
	</div>
</footer>