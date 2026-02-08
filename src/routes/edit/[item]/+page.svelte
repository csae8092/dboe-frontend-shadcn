<script lang="ts">
    const { data } = $props()
</script>

<h1>{data.selectedItem.label}</h1>

{#each data.payload.results as x }
<div>{x}</div>
    
{/each}
