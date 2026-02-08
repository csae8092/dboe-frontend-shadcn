<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import MyDarkmodeToggle from '$lib/components/my-darkmode-toggle.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { MenuIcon, Github, LogInIcon ,LogOutIcon } from 'lucide-svelte';

	import { appConfig } from '$lib/constants';
	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{appConfig.title}</title>
</svelte:head>
<div class="flex min-h-screen flex-col">
	<header class="sticky top-0 z-50 bg-background">
		<div class="max-w-10xl mx-auto flex items-center justify-between gap-8 px-4 py-7 sm:px-6">
			<div
				class="flex flex-1 items-center justify-between gap-8 font-medium text-foreground lg:gap-16"
			>
				<a href="/" class="hover:text-primary">{appConfig.title_short}</a>
			</div>
			<div
				class="flex flex-1 items-center gap-8 font-medium text-muted-foreground max-md:hidden lg:gap-16"
			></div>

			<div class="flex items-center gap-6">
				<MyDarkmodeToggle></MyDarkmodeToggle>
				{#if data.userData?.username }
					<Button variant="outline" size="icon" href="/log-out">
					<LogOutIcon />
					<span class="sr-only">Log-out</span>
				</Button>
				{:else}
				<Button variant="outline" size="icon" href="/log-in">
					<LogInIcon />
					<span class="sr-only">Log-in</span>
				</Button>
				{/if}
				
				<DropdownMenu.Root>
					<DropdownMenu.Trigger class="md:hidden">
						{#snippet child({ props })}
							<Button {...props} variant="outline" size="icon">
								<MenuIcon />
								<span class="sr-only">Menu</span>
							</Button>
						{/snippet}
					</DropdownMenu.Trigger>
					<DropdownMenu.Content>
						<DropdownMenu.Item>
							<a href="/foo">
								<div class="flex gap-1">bar</div>
							</a>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>
	</header>
	<main class="flex-1">
		<div class="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40">
			{@render children()}
		</div>
	</main>
	<footer class="mt-8 mb-3 flex justify-center">
		<a href={appConfig.code_repo_url}>
			<Github class="h-10 w-10 text-muted-foreground dark:hover:text-white" />
			<span class="sr-only">Link to code on GitHub</span>
		</a>
	</footer>
</div>
