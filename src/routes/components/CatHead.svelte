<script lang="ts">
	import Hbla from './cats/head/Hbla.svelte';
	import Hblb from './cats/head/Hblb.svelte';
	import Hblc from './cats/head/Hblc.svelte';
	import Hbld from './cats/head/Hbld.svelte';
	import Hbra from './cats/head/Hbra.svelte';
	import Hbrb from './cats/head/Hbrb.svelte';
	import Hbrc from './cats/head/Hbrc.svelte';
	import Hbrd from './cats/head/Hbrd.svelte';
	import Hbre from './cats/head/Hbre.svelte';
	import Hwa from './cats/head/Hwa.svelte';
	import Hwb from './cats/head/Hwb.svelte';
	import Hwc from './cats/head/Hwc.svelte';
	import Hwd from './cats/head/Hwd.svelte';
	import Hwe from './cats/head/Hwe.svelte';

	export let id: string;
</script>

<section>
	<div class="h-32 w-48">
		{#if id == 'A'}
			<div class="h-full">
				<Hbla />
			</div>
		{:else if id == 'B'}
			<div class="h-full">
				<Hblb />
			</div>
		{:else if id == 'C'}
			<div class="h-full">
				<Hblc />
			</div>
		{:else if id == 'D'}
			<div class="h-full">
				<Hbld />
			</div>
		{:else if id == 'E'}
			<div class="h-full">
				<Hwa />
			</div>
		{:else if id == 'F'}
			<div class="h-full">
				<Hwb />
			</div>
		{:else if id == 'G'}
			<div class="h-full">
				<Hwc />
			</div>
		{:else if id == 'H'}
			<div class="h-full">
				<Hwd />
			</div>
		{:else if id == 'I'}
			<div class="h-full">
				<Hwe />
			</div>
		{:else if id == 'J'}
			<div class="h-full">
				<Hbra />
			</div>
		{:else if id == 'K'}
			<div class="h-full">
				<Hbrb />
			</div>
		{:else if id == 'L'}
			<div class="h-full">
				<Hbrc />
			</div>
		{:else if id == 'M'}
			<div class="h-full">
				<Hbrd />
			</div>
		{:else if id == 'N'}
			<div class="h-full">
				<Hbre />
			</div>
		{/if}
	</div>
</section>
