<script lang="ts">
	import CatBlock from './CatBlock.svelte';
	import Footer from './Footer.svelte';
	export let cats: string[] = [];

	export const max_id: number = 3;

	let y: number;
	let h: number;
	let threshold = 150;
	$: {
		// console.log(h + y, 112 + cats.length * 192);
		while (h + y > 112 + cats.length * 192 - threshold) {
			cats = [...cats, String.fromCharCode('A'.charCodeAt(0) + Math.floor(Math.random() * max_id))];
			// console.log(cats);
		}
	}
</script>

<svelte:head>
	<title>LOOOOONG CAT</title>
	<meta name="description" content="Have you ever seen a cat that LOOOOONG" />
</svelte:head>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />

<section>
	<main class="w-screen min-h-screen max-w-lg mx-auto flex flex-col items-center bg-transparent">
		<div class="py-10 font-bold text-2xl text-center">LOOOOONG CAT</div>

		<div class="flex flex-col bg-red max-w-sm items-center ">
			{#each cats as cat}
				<CatBlock id={cat} />
			{/each}
		</div>
		<Footer {cats} />
	</main>
	<div class="w-screen h-screen fixed -z-50 top-0 bg-gradient-to-b from-blue-200 to-purple-300" />
</section>
