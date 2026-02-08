<script>
	import Button from './ui/button/button.svelte';
	import { LogInIcon, LogOutIcon } from 'lucide-svelte';

	let { data } = $props();
</script>

{#if data.username}
	<Button variant="outline" size="icon" href="/log-out" title="Log out">
		<LogOutIcon />
		<span class="sr-only">Log-out</span>
	</Button>
{:else}
	<Button variant="outline" size="icon" href="/log-in" title="Log in">
		<LogInIcon />
		<span class="sr-only">Log-in</span>
	</Button>
{/if}
