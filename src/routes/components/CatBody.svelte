<script lang="ts">
	export let id: string;
	import Bbla from './cats/body/Bbla.svelte';
	import Bblb from './cats/body/Bblb.svelte';
	import Bblc from './cats/body/Bblc.svelte';
	import Bbld from './cats/body/Bbld.svelte';
	import Bbra from './cats/body/Bbra.svelte';
	import Bbrb from './cats/body/Bbrb.svelte';
	import Bbrc from './cats/body/Bbrc.svelte';
	import Bbrd from './cats/body/Bbrd.svelte';
	import Bwa from './cats/body/Bwa.svelte';
	import Bwb from './cats/body/Bwb.svelte';
	import Bwc from './cats/body/Bwc.svelte';
	import Bwd from './cats/body/Bwd.svelte';
</script>

<section>
	<div class="h-32 w-48">
		{#if id == 'A'}
			<div class="h-full">
				<Bbla />
			</div>
		{:else if id == 'B'}
			<div class="h-full">
				<Bblb />
			</div>
		{:else if id == 'C'}
			<div class="h-full">
				<Bblc />
			</div>
		{:else if id == 'D'}
			<div class="h-full">
				<Bbld />
			</div>
		{:else if id == 'E'}
			<div class="h-full">
				<Bwa />
			</div>
		{:else if id == 'F'}
			<div class="h-full">
				<Bwb />
			</div>
		{:else if id == 'G'}
			<div class="h-full">
				<Bwc />
			</div>
		{:else if id == 'H'}
			<div class="h-full">
				<Bwd />
			</div>
		{:else if id == 'I'}
			<div class="h-full">
				<Bbra />
			</div>
		{:else if id == 'J'}
			<div class="h-full">
				<Bbrb />
			</div>
		{:else if id == 'K'}
			<div class="h-full">
				<Bbrc />
			</div>
		{:else if id == 'L'}
			<div class="h-full">
				<Bbrd />
			</div>
		{/if}
	</div>
</section>
