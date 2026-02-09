<script lang="ts">
	const { data, params } = $props();
	import * as Table from '$lib/components/ui/table/index.js';
</script>

<h1 class="text-center text-3xl">
	{data.payload.count} {params.item} <span class="font-thin">related to</span> {params.beleg_id}
</h1>

{#if data.payload.results.length > 0}
<Table.Root>
	<Table.Caption>{data.payload.count} {data.selectedItem.label} related to {params.beleg_id} </Table.Caption>
	<Table.Header>
		<Table.Row>
			{#each Object.keys(data.payload.results[0]) as x, i}
				<Table.Head id={`th-id-${i}`}>{x}</Table.Head>
			{/each}
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each data.payload.results as row, i}
			<Table.Row id={`tr-id-${i}`}>
				{#each Object.entries(row) as [key, value], tdid}
					{#if key === 'url'}
						<Table.Cell id={`td-id-${tdid}`}><a href={String(value)}>{value}</a></Table.Cell>
					{:else}
						<Table.Cell id={`td-id-${tdid}`}>{value}</Table.Cell>
					{/if}
				{/each}
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
{/if}