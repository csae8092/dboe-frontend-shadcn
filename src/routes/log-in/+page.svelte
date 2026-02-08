<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Field from '$lib/components/ui/field/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { enhance } from '$app/forms';
	let { form } = $props();
</script>

<h1 class="text-center text-2xl">Log in</h1>
	{#if form?.message}<p class="error">{form.message}</p>{/if}
<div class="flex justify-center">
	<form class="w-96" method="POST" use:enhance>
		<Field.Group>
			<Field.Field orientation="responsive">
				<Field.Label for="username">Username</Field.Label>
				<Input type="text" id="username" name="username" placeholder="Username" required />
			</Field.Field>
			<Field.Field orientation="responsive">
				<Field.Label for="password">Password</Field.Label>
				<Input type="password" id="password" name="password" placeholder="Password" required />
			</Field.Field>
			<Field.Field orientation="responsive">
				<Button type="submit">Log in</Button>
			</Field.Field>
		</Field.Group>
	</form>
</div>
