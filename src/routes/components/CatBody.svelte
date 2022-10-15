<script lang="ts">
	export let id: string;
	import Bba from './cats/body/Bba.svelte';
	import Bbb from './cats/body/Bbb.svelte';
	import Bbc from './cats/body/Bbc.svelte';
	import Bbd from './cats/body/Bbd.svelte';
	import Bwa from './cats/body/Bwa.svelte';
	import Bwb from './cats/body/Bwb.svelte';
	import Bwc from './cats/body/Bwc.svelte';
	import Bwd from './cats/body/Bwd.svelte';
</script>

<section>
	<div class="h-32 w-48">
		{#if id == 'A'}
			<div class="h-full">
				<Bba />
			</div>
		{:else if id == 'B'}
			<div class="h-full">
				<Bbb />
			</div>
		{:else if id == 'C'}
			<div class="h-full">
				<Bbc />
			</div>
		{:else if id == 'D'}
			<div class="h-full">
				<Bbd />
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
		{/if}
	</div>
</section>
