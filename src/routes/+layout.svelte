<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import MyDarkmodeToggle from '$lib/components/my-darkmode-toggle.svelte';
	import MyLogInButton from '$lib/components/my-log-in-button.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { MenuIcon, Github } from 'lucide-svelte';

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
			>
				{#each Object.entries(data.routeMapper) as [key, value] (key)}
					<a href={value.href} class="hover:text-primary">
						<div class="flex gap-1">{value.label}</div>
					</a>
				{/each}
			</div>

			<div class="flex items-center gap-6">
				<MyDarkmodeToggle></MyDarkmodeToggle>
				<MyLogInButton {data}></MyLogInButton>
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
						{#each Object.entries(data.routeMapper) as [key, value]}
							<DropdownMenu.Item>
								<a href={value.href}>
									{value.label}
								</a>
							</DropdownMenu.Item>
						{/each}
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
