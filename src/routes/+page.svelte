<script lang="ts">
    import { appConfig } from "$lib/constants";
    const { data } = $props()
</script>

<h1 class="text-center text-3xl">{appConfig.title}</h1>
{#if data.username}
<h2 class="text-center text-2xl">Hello { data.username }</h2>
{/if}
