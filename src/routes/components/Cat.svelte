<script lang="ts">
	import randomChar from '../../utils/randomChar';
	import CatBody from './CatBody.svelte';
	import CatHead from './CatHead.svelte';
	import Footer from './Footer.svelte';

	export let body: string[] = [];
	export let head: string = '';

	export const max_body_id: number = 12;
	export const max_head_id: number = 14;
	export let freeze: boolean = false;
	export let adding: boolean = false;
	let y: number;
	let h: number;
	let threshold = 150;

	let selected = 'A';

	if (head == '') head = randomChar(max_head_id);
	const addCatBlockFromSelected = (selected_value: string) => {
		if (
			'A'.charCodeAt(0) <= selected_value.charCodeAt(0) &&
			selected_value.charCodeAt(0) <= 'A'.charCodeAt(0) + max_body_id
		) {
			body = [...body, selected_value.charAt(0)];
			window.scrollBy({
				top: 128,
				left: 0,
				behavior: 'smooth'
			});
		}
	};

	$: {
		// console.log(h + y, 112 + cats.length * 192);
		if (!freeze && !adding)
			while (h + y > 112 + body.length * 128 - threshold) {
				body = [...body, randomChar(max_body_id)];
				// console.log(cats);
			}
	}

	const beforeSelected = () => {
		let newId = selected.charCodeAt(0) - 1;
		if (newId < 'A'.charCodeAt(0)) {
			newId = 'A'.charCodeAt(0) + max_body_id - 1;
		}
		scrollToId(String.fromCharCode(newId), false);
	};

	const afterSelected = () => {
		let newId = selected.charCodeAt(0) + 1;
		if (newId > 'A'.charCodeAt(0) + max_body_id - 1) {
			newId = 'A'.charCodeAt(0);
		}
		scrollToId(String.fromCharCode(newId), false);
	};

	const scrollToId = (id: string, smooth: boolean) => {
		if (selected != id) {
			ScrollingElem.scroll({
				top: 0,
				left: (id.charCodeAt(0) - 'A'.charCodeAt(0)) * 192,
				behavior: smooth ? 'smooth' : 'auto'
			});
			selected = id;
		}
	};

	const allBodyId: string[] = [];
	for (let i = 0; i < max_body_id; i++) {
		allBodyId.push(String.fromCharCode('A'.charCodeAt(0) + i));
	}
	const handleScroll = (e: any) => {
		let scrollLeft = e.target.scrollLeft;
		let newId = 'A';
		for (let i = 1; i < max_body_id; i++) {
			if (scrollLeft >= 192 * i - 192 / 2) {
				newId = String.fromCharCode('A'.charCodeAt(0) + i);
			}
		}
		scrollToId(newId, true);
	};
	let ScrollingElem: Element;
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
</svelte:head>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />

<section class="w-screen">
	<main class="w-full  min-h-screen max-w-lg mx-auto flex flex-col items-center bg-transparent">
		<div class="mt-16 font-bold text-2xl text-center">LOOOOONG CAT</div>
		<div class="text-sm text-slate-600 mb-8">
			illustration by <a class="underline" href="https://www.instagram.com/partsofpim/"
				>@partsofpim</a
			>
		</div>
		<!-- <div class="fixed right-2 top-2">
			{1 + body.length}
		</div> -->
		<div class="flex flex-col bg-red max-w-sm items-center ">
			<CatHead id={head} />
			{#each body as peice}
				<CatBody id={peice} />
			{/each}
		</div>
		<Footer {head} {body} {adding} />
		{#if adding}
			<div
				class="opacity-50 flex flex-row overflow-auto max-w-full w-48 "
				bind:this={ScrollingElem}
				on:scroll={handleScroll}
			>
				{#each allBodyId as id}
					<CatBody {id} />
				{/each}
			</div>
			<div class="py-6 z-10 h-32 mb-12" id="adding-console">
				<button on:click={beforeSelected} class="w-7 h-7 bg-white rounded-lg">{`⬅️`}</button>
				<!-- <input type="text"  name="" id="" class="w-8 h-8 text-center" bind:value={selected} /> -->

				<button
					on:click={() => addCatBlockFromSelected(selected)}
					class="bg-white px-4 py-1 rounded-md h-8">add {selected}</button
				>
				<button on:click={afterSelected} class="w-7 h-7 bg-white rounded-lg">{`➡️`}</button>
			</div>
		{/if}
		{#if freeze}
			<a
				class="z-10 mt-10 mb-20 bg-white hover:bg-slate-100 px-4 py-1 rounded-md shadow-md  max-w-md"
				href="/">create your looooong cat</a
			>
		{/if}
	</main>
	<div class="w-screen h-screen fixed -z-50 top-0 bg-gradient-to-b from-blue-200 to-purple-300">
		<div
			class="h-6 w-32 ml-4 rounded-3xl top-16 bg-gradient-to-r from-white to-slate-100 absolute move-left-right"
		/>

		<div
			class="h-8 w-24 mr-4 rounded-3xl top-36 bg-gradient-to-l from-white to-slate-100 absolute move-right-left"
		/>

		<div
			class="h-7 w-12 ml-12 rounded-3xl top-72 bg-gradient-to-r from-white to-slate-100 absolute move-left-right-slow"
		/>

		<!-- <div class="w-10 h-48 bottom-0 left-12  bg-slate-400/60 rounded-sm absolute" /> -->
	</div>
</section>

<style>
	@keyframes move-l-r {
		from {
			left: -100px;
		}
		to {
			left: 120vw;
		}
	}

	@keyframes move-r-l {
		from {
			right: -100px;
		}
		to {
			right: 120vw;
		}
	}
	.move-left-right {
		animation-name: move-l-r;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-direction: alternate-reverse;
		animation-duration: 20s;
	}
	.move-left-right-slow {
		animation-name: move-l-r;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-direction: alternate-reverse;
		animation-duration: 25s;
	}
	.move-right-left {
		animation-name: move-r-l;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-direction: alternate-reverse;
		animation-duration: 20s;
	}
</style>
