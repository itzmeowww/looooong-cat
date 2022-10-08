<script lang="ts">
	import Cat from './components/Cat.svelte';
	let cats: string[] = ['A', 'B', 'C'];
	const max_id = 3;
	let y: number;
	let h: number;
	let threshold = 200;
	$: {
		// console.log(h + y, 112 + cats.length * 192);
		if (h + y > 112 + cats.length * 192 - threshold) {
			cats = [...cats, String.fromCharCode('A'.charCodeAt(0) + Math.floor(Math.random() * max_id))];
			console.log(cats);
		}
	}

	let handleShare = () => {
		const shareData = {
			title: 'MDN',
			text: 'Learn web development on MDN!',
			url: 'https://developer.mozilla.org'
		};
		navigator.share(shareData);
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Long Cat" />
</svelte:head>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />

<section>
	<main class="w-screen min-h-screen max-w-md mx-auto flex flex-col items-center bg-transparent">
		<div class="py-10 font-bold text-2xl text-center">LOOOOONG CAT</div>

		<div class="flex flex-col bg-red max-w-sm items-center ">
			{#each cats as cat}
				<Cat id={cat} />
			{/each}
		</div>
		<div class="z-10 fixed bottom-0 w-full max-w-md mx-auto flex items-center justify-end">
			<button on:click={handleShare} class=" w-12 h-12 m-6 bg-white rounded-xl shadow-md" />
		</div>
	</main>
	<div class="w-screen h-screen fixed -z-50 top-0 bg-gradient-to-b from-blue-200 to-purple-300" />
</section>
