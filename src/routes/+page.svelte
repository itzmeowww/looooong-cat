<script>
	import Create from './components/icons/Create.svelte';
	import Endless from './components/icons/Endless.svelte';
	import LooooongCat from './components/icons/LooooongCat.svelte';
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
<section class="w-screen" style="background-color: #F0E5DA;">
	<main
		class="w-full h-screen max-w-lg mx-auto flex flex-col items-center justify-center bg-transparent relative"
	>
		<div class="absolute bottom-0 z-0 flex flex-col justify-center items-center">
			<div class="w-full max-w-sm px-4">
				<LooooongCat />
			</div>
			<div class="text-2xl mb-5 mt-3 font-pim " style="color: #603813;">
				illustration by <a class="underline" href="https://www.instagram.com/partsofpim/"
					>@partsofpim</a
				>
			</div>
			<img class="ml-1 max-w-xs" src="door_mobile.png" alt="" />
		</div>

		<div class="flex flex-col gap-2 bottom-[180px] absolute z-10">
			<a href="/endless" class="hover:scale-105 h-28 w-36 z-10">
				<Endless />
			</a>
			<a href="/create" class="hover:scale-105 h-28 w-36 z-10">
				<Create />
			</a>
		</div>
	</main>
</section>
