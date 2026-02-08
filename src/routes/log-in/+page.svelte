<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Field from '$lib/components/ui/field/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<h1 class="text-center text-2xl">Log in</h1>

<div class="flex justify-center">
	<form class="w-96" method="POST">
		<Field.Group>
			<Field.Field orientation="responsive">
				<Field.Label for="text">Username</Field.Label>
				<Input type="text" id="text" name="text" placeholder="Enter value" required />
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
