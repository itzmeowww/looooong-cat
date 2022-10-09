<script lang="ts">
	export let id: string;
	import Ha from './cats/head/HA.svelte';
	import Hb from './cats/head/HB.svelte';
	import Hc from './cats/head/HC.svelte';
	import Hd from './cats/head/HD.svelte';
</script>

<section>
	<div class="h-48 w-48">
		{#if id == 'A'}
			<div class="w-full h-full">
				<Ha />
			</div>
		{:else if id == 'B'}
			<div class="w-full h-full">
				<Hb />
			</div>
		{:else if id == 'C'}
			<div class="w-full h-full">
				<Hc />
			</div>
		{:else if id == 'D'}
			<div class="w-full h-full">
				<Hd />
			</div>
		{/if}
	</div>
</section>
