<script lang="ts">
	import Cat from '../components/Cat.svelte';
	import { page } from '$app/stores';
	import { max_body_id, max_head_id } from '../components/cats/catData';
	const body: string[] = [];
	let head = '';
	const id: string = $page.params.id;
	const headId = id.split('_')[0];
	const bodyId = id.split('_')[1];
	if (
		'A'.charCodeAt(0) <= headId.charCodeAt(0) &&
		headId.charCodeAt(0) <= 'A'.charCodeAt(0) + max_head_id
	) {
		head = headId[0];
	}

	let lastChar = '';
	let charCount = '';
	bodyId.split('').forEach((x: string) => {
		if ('0'.charCodeAt(0) <= x.charCodeAt(0) && x.charCodeAt(0) <= '9'.charCodeAt(0)) {
			charCount += x;
		} else if (
			'A'.charCodeAt(0) <= x.charCodeAt(0) &&
			x.charCodeAt(0) <= 'A'.charCodeAt(0) + max_body_id
		) {
			for (let i = 0; i < parseInt(charCount); i++) {
				body.push(lastChar);
			}
			charCount = '';
			lastChar = x;
			body.push(x);
		}
	});

	for (let i = 0; i < parseInt(charCount); i++) {
		body.push(lastChar);
	}
</script>

<Cat {head} {body} freeze />
