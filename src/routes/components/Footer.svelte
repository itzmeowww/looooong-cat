<script lang="ts">
	export let cats: string[];
	let handleShare = () => {
		const baseUrl = window.location.href;
		const catid = cats.join('');

		const url = `${baseUrl}${catid}`;
		const shareData = {
			title: 'LOOOOONG CAT',
			text: 'Check out this looooong cat',
			url: url
		};
		// console.log(shareData)
		if (!navigator.canShare && navigator.canShare(shareData)) {
			navigator.clipboard.writeText(url).then(() => {
				alert('Copied to clipboard');
			});
		} else {
			navigator.share(shareData);
		}
	};
</script>

<div class="z-10 fixed bottom-0 w-screen max-w-md mx-auto flex items-center justify-end">
	<button on:click={handleShare} class=" w-12 h-12 m-6 bg-white rounded-lg shadow-md">share</button>
</div>
