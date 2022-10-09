<script lang="ts">
	export let id: string;
	import Ba from './cats/body/BA.svelte';
	import Bb from './cats/body/BB.svelte';
	import Bc from './cats/body/BC.svelte';
	import Bd from './cats/body/BD.svelte';
</script>

<section>
	<div class="h-32 w-48">
		{#if id == 'A'}
			<div class="h-full">
				<Ba />
			</div>
		{:else if id == 'B'}
			<div class="h-full">
				<Bb />
			</div>
		{:else if id == 'C'}
			<div class="h-full">
				<Bc />
			</div>
		{:else if id == 'D'}
			<div class="h-full">
				<Bd />
			</div>
		{/if}
	</div>
</section>
