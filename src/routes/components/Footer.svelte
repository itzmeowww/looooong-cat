<script lang="ts">
	export let cats: string[];
	let handleShare = () => {
		const baseUrl = window.location.href;
		const shareData = {
			title: 'LOOOOONG CAT',
			text: 'Check out this looooong cat',
			url: `${baseUrl}${cats.join('')}`
		};
		// console.log(shareData);
		navigator.share(shareData);
	};
</script>

<div class="z-10 fixed bottom-0 w-full max-w-md mx-auto flex items-center justify-end">
	<button on:click={handleShare} class=" w-12 h-12 m-6 bg-white rounded-xl shadow-md">share</button>
</div>
