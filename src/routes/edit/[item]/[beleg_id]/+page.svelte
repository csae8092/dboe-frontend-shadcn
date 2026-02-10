<script lang="ts">
	import { fieldsToExclude } from '$lib/constants.js';
	import * as Table from '$lib/components/ui/table/index.js';
	const { data, params } = $props();
</script>

<h1 class="text-center text-3xl">
	{data.payload.count}
	{params.item} <span class="font-thin">related to</span>
	{params.beleg_id}
</h1>

{#if data.payload.results.length > 0}
	<Table.Root>
		<Table.Caption
			>{data.payload.count} {data.selectedItem.label} related to {params.beleg_id}
		</Table.Caption>
		<Table.Header>
			<Table.Row>
				{#each Object.keys(data.payload.results[0]) as x, i}
					{#if !fieldsToExclude.includes(x)}
						<Table.Head id={`th-id-${i}`}>{x}</Table.Head>
					{/if}
				{/each}
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each data.payload.results as row, i}
				<Table.Row id={`tr-id-${i}`}>
					{#each Object.entries(row) as [key, value], tdid}
						{#if key === 'id'}
							<Table.Cell id={`td-id-${tdid}`}><a class="underline decoration-dotted" href={`${row.url}?format=json`}>{value}</a></Table.Cell>
						{:else if !fieldsToExclude.includes(key)}
							<Table.Cell id={`td-id-${tdid}`}>{value}</Table.Cell>
						{/if}
					{/each}
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
{/if}
