<script lang="ts">
	export let id: string;
	import Hba from './cats/head/Hba.svelte';
	import Hbb from './cats/head/Hbc.svelte';
	import Hbc from './cats/head/Hbb.svelte';
	import Hbd from './cats/head/Hbd.svelte';
	import Hwa from './cats/head/Hwa.svelte';
	import Hwb from './cats/head/Hwb.svelte';
	import Hwc from './cats/head/Hwc.svelte';
	import Hwd from './cats/head/Hwd.svelte';
</script>

<section>
	<div class="h-32 w-48">
		{#if id == 'A'}
			<div class="h-full">
				<Hba />
			</div>
		{:else if id == 'B'}
			<div class="h-full">
				<Hbb />
			</div>
		{:else if id == 'C'}
			<div class="h-full">
				<Hbc />
			</div>
		{:else if id == 'D'}
			<div class="h-full">
				<Hbd />
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
		{/if}
	</div>
</section>
