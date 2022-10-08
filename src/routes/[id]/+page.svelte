<script lang="ts">
	import Cat from '../components/Cat.svelte';
	import { page } from '$app/stores';
	let max_body: number = 3;
	let max_head: number = 2;
	const body: string[] = [];
	let head = '';
	const id: string = $page.params.id;
	const headId = id.split('_')[0];
	const bodyId = id.split('_')[1];
	if (
		'A'.charCodeAt(0) <= headId.charCodeAt(0) &&
		headId.charCodeAt(0) <= 'A'.charCodeAt(0) + max_head
	) {
		head = headId[0];
	}

	bodyId.split('').forEach((x: string) => {
		if ('A'.charCodeAt(0) <= x.charCodeAt(0) && x.charCodeAt(0) <= 'A'.charCodeAt(0) + max_body) {
			body.push(x);
		}
	});
</script>

<Cat {head} {body} freeze />
