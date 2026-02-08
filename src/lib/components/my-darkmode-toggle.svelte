<script lang="ts">
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import Button from './ui/button/button.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	import { ModeWatcher, toggleMode } from 'mode-watcher';
</script>

<ModeWatcher />
<Tooltip.Provider delayDuration={0}>
	<Tooltip.Root
		><Tooltip.Trigger>
			<Button onclick={toggleMode} variant="outline" size="icon">
				<SunIcon
					class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
				/>
				<MoonIcon
					class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>Toggle mode</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
