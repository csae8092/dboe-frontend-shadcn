<script lang="ts">
	const { data } = $props();
	import * as Table from '$lib/components/ui/table/index.js';
</script>

<h1 class="text-center text-3xl">{data.selectedItem.label}</h1>

<Table.Root>
	<Table.Caption>{data.selectedItem.label}</Table.Caption>
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
						<Table.Cell id={`td-id-${tdid}`}><a href={value}>{value}</a></Table.Cell>
					{:else}
						<Table.Cell id={`td-id-${tdid}`}>{value}</Table.Cell>
					{/if}
				{/each}
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
