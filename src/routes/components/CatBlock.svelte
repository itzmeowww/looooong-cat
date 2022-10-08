<script lang="ts">
	export let id: string;
	import HB from './cats/head/HB.svelte';
	import BA from './cats/body/BA.svelte';
</script>

<section>
	<div class="h-48 w-48">
		{#if id == 'head0'}
			<div class="w-full h-full">
				<HB />
			</div>
		{:else if id == 'A'}
			<div class="w-full h-full">
				<BA />
			</div>
		{:else if id == 'B'}
			<div class="w-full h-full bg-green-300" />
		{:else if id == 'C'}
			<div class="w-full h-full bg-blue-300" />
		{:else}
			<div class="w-full h-full" />
		{/if}
	</div>
</section>
