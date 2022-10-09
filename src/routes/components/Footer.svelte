<script lang="ts">
	import Cat from './Cat.svelte';

	export let body: string[];
	export let head: string;
	let handleShare = () => {
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
	<button on:click={handleShare} class=" w-12 h-12 m-6 bg-white rounded-lg shadow-md">Sh</button>
</div>
