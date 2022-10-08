<script lang="ts">
	import randomChar from '../../utils/randomChar';
	import CatBody from './CatBody.svelte';
	import CatHead from './CatHead.svelte';
	import Footer from './Footer.svelte';
	export let body: string[] = [];
	export let head: string = '';

	export const max_id: number = 3;
	export let freeze: boolean = false;
	let y: number;
	let h: number;
	let threshold = 150;

	if (head == '') head = randomChar(2);

	$: {
		// console.log(h + y, 112 + cats.length * 192);
		if (!freeze)
			while (h + y > 112 + body.length * 192 - threshold) {
				body = [...body, randomChar(max_id)];
				// console.log(cats);
			}
	}
</script>

<svelte:head>
	<title>LOOOOONG CAT</title>
	<!-- Primary Meta Tags -->
	<title>LOOOOONG CAT</title>
	<meta name="title" content="LOOOOONG CAT" />
	<meta name="description" content="Have you ever seen a cat that LOOOOONG" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://looooongcat.vercel.app/" />
	<meta property="og:title" content="LOOOOONG CAT" />
	<meta property="og:description" content="Have you ever seen a cat that LOOOOONG" />
	<meta property="og:image" content="https://looooongcat.vercel.app/preview.svg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://looooongcat.vercel.app/" />
	<meta property="twitter:title" content="LOOOOONG CAT" />
	<meta property="twitter:description" content="Have you ever seen a cat that LOOOOONG" />
	<meta property="twitter:image" content="https://looooongcat.vercel.app/preview.svg" />

	<link rel="icon" href="https://looooongcat.vercel.app/preview.svg" />
</svelte:head>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />

<section class="w-screen">
	<main class="w-full  min-h-screen max-w-lg mx-auto flex flex-col items-center bg-transparent">
		<div class="mt-16 mb-8 font-bold text-2xl text-center">LOOOOONG CAT</div>

		<div class="flex flex-col bg-red max-w-sm items-center ">
			<CatHead id={head} />
			{#each body as peice}
				<CatBody id={peice} />
			{/each}
		</div>
		<Footer {head} {body} />

		{#if freeze}
			<a
				class="z-10 mt-10 mb-20 bg-white hover:bg-slate-100 px-4 py-1 rounded-md shadow-md  max-w-md"
				href="/"
				sveltekit:prefetch>create your looooong cat</a
			>
		{/if}
	</main>
	<div class="w-screen h-screen fixed -z-50 top-0 bg-gradient-to-b from-blue-200 to-purple-300" />
</section>
