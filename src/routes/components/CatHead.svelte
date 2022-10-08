<script lang="ts">
	export let id: string;
	import HA from './cats/head/HA.svelte';
	import HB from './cats/head/HB.svelte';
</script>

<section>
	<div class="h-48 w-48">
		{#if id == 'A'}
			<div class="w-full h-full">
				<HA />
			</div>
		{:else if id == 'B'}
			<div class="w-full h-full">
				<HB />
			</div>
		{/if}
	</div>
</section>
