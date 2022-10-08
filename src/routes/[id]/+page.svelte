<script lang="ts">
	import Cat from '../components/Cat.svelte';
	import { page } from '$app/stores';
	let max_id: number = 3;
	const cats: string[] = [];
	const id: string = $page.params.id;

	id.split('').forEach((x: string) => {
		if ('A'.charCodeAt(0) <= x.charCodeAt(0) && x.charCodeAt(0) <= 'A'.charCodeAt(0) + max_id) {
			cats.push(x);
		}
	});
</script>

<Cat {cats} freeze />
