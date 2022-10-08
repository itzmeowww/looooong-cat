<script lang="ts">
	import CatBlock from './CatBlock.svelte';
	import Footer from './Footer.svelte';
	export let cats: string[] = [];

	export const max_id: number = 3;
	export let freeze: boolean = false;
	let y: number;
	let h: number;
	let threshold = 150;
	$: {
		// console.log(h + y, 112 + cats.length * 192);
		if (!freeze)
			while (h + y > 112 + cats.length * 192 - threshold) {
				cats = [
					...cats,
					String.fromCharCode('A'.charCodeAt(0) + Math.floor(Math.random() * max_id))
				];
				// console.log(cats);
			}
	}
</script>

<svelte:head>
	<title>LOOOOONG CAT</title>
	<meta name="description" content="Have you ever seen a cat that LOOOOONG" />
</svelte:head>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />

<section class="w-screen">
	<main class="w-full  min-h-screen max-w-lg mx-auto flex flex-col items-center bg-transparent">
		<div class="mt-16 mb-8 font-bold text-2xl text-center">LOOOOONG CAT</div>

		<div class="flex flex-col bg-red max-w-sm items-center ">
			<CatBlock id={'head0'} />
			{#each cats as cat}
				<CatBlock id={cat} />
			{/each}
		</div>
		<Footer {cats} />

		{#if freeze}
			<a
				class="z-10 mt-12 mb-20 bg-white hover:bg-slate-100 px-4 py-1 rounded-md shadow-md  max-w-md"
				href="/"
				sveltekit:prefetch>create your own cat</a
			>
		{/if}
	</main>
	<div class="w-screen h-screen fixed -z-50 top-0 bg-gradient-to-b from-blue-200 to-purple-300" />
</section>
