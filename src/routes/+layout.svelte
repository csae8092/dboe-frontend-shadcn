<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import MyDarkmodeToggle from '$lib/components/my-darkmode-toggle.svelte';


	let { children } = $props();
</script>
<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<MyDarkmodeToggle></MyDarkmodeToggle>
{@render children()}
