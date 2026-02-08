<script>
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import Button from './ui/button/button.svelte';
	import { LogInIcon, LogOutIcon } from 'lucide-svelte';

	let { data } = $props();
</script>

{#if data.username}
	<Tooltip.Provider delayDuration={0}>
		<Tooltip.Root
			><Tooltip.Trigger>
				<Button variant="outline" size="icon" href="/log-out">
					<LogOutIcon />
					<span class="sr-only">Log-out</span>
				</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Log out</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
{:else}
	<Tooltip.Provider delayDuration={0}>
		<Tooltip.Root
			><Tooltip.Trigger>
				<Button variant="outline" size="icon" href="/log-in">
					<LogInIcon />
					<span class="sr-only">Log-in</span>
				</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Log in</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
{/if}
