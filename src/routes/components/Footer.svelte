<script lang="ts">
	import Edit from './icons/Edit.svelte';
	import Home from './icons/Home.svelte';
	import Reset from './icons/Reset.svelte';
	import Rest from './icons/Reset.svelte';
	import Share from './icons/Share.svelte';

	export let adding: boolean = false;
	export let body: string[];
	export let head: string;

	export let handleReset = () => {};

	const handleShare = () => {
		const baseUrl = window.location.origin;
		let catid = '';
		let lastChar = '';
		let charCount = 1;
		body.forEach((peice: string) => {
			if (lastChar != peice) {
				if (charCount > 1) {
					catid += charCount.toString();
					charCount = 1;
				}
				lastChar = peice;
				catid += lastChar;
			} else {
				charCount = charCount + 1;
			}
		});

		if (charCount > 1) {
			catid += charCount.toString();
		}

		const url = `${baseUrl}/${head}_${catid}`;
		const shareData = {
			title: 'LOOOOONG CAT',
			url: url
		};
		// console.log(shareData)
		console.log(shareData);
		if (!navigator.canShare && navigator.canShare(shareData)) {
			navigator.clipboard.writeText(url).then(() => {
				// alert('Copied to clipboard');
			});
		} else {
			navigator.share(shareData);
		}
	};
</script>

<div class="z-10 fixed bottom-0 w-screen max-w-md mx-auto flex items-center justify-end">
	<div class="flex flex-col m-6 gap-1">
		<!-- {#if !adding}
			<a href="/create">
				<button class=" w-14 h-14 rounded-lg hover:scale-105"><Edit /></button>
			</a>
		{/if} -->
		<a href="/" class=" w-14 h-14 rounded-lg hover:scale-105">
			<Home />
		</a>
		<button on:click={handleReset} class=" w-14 h-14 rounded-lg hover:scale-105">
			<Reset />
		</button>
		<button on:click={handleShare} class=" w-14 h-14 rounded-lg hover:scale-105">
			<Share />
		</button>
	</div>
</div>
