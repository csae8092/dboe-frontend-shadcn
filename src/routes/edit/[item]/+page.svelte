<script lang="ts">
	const { data } = $props();
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import { fieldsToExclude } from '$lib/constants.js';
	import { page as pageStore } from '$app/state';
	let url = $derived(pageStore.url);
	let page_size = $derived(Number(url.searchParams.get('page_size') || '15'));
	let items_total_count = $derived(data.payload.count);
	import { goto, preloadData } from '$app/navigation';

</script>

<h1 class="text-center text-3xl">{data.selectedItem.label}</h1>

<div>
	<Pagination.Root count={items_total_count} perPage={page_size}>
		{#snippet children({ pages, currentPage })}
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.Previous
						onmouseenter={() => {
							const params = new URLSearchParams(url.searchParams);
							params.set('page', String(currentPage - 1));
							preloadData(`${url.pathname}?${params}`);
						}}
						onclick={() => {
							const params = new URLSearchParams(url.searchParams);
							params.set('page', String(currentPage - 1));
							goto(`${url.pathname}?${params}`);
						}}
					></Pagination.Previous>
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.Next
						onmouseenter={() => {
							const params = new URLSearchParams(url.searchParams);
							params.set('page', String(currentPage + 1));
							preloadData(`${url.pathname}?${params}`);
						}}
						onclick={() => {
							const params = new URLSearchParams(url.searchParams);
							params.set('page', String(currentPage + 1));
							goto(`${url.pathname}?${params}`);
						}}
					></Pagination.Next>
				</Pagination.Item>
			</Pagination.Content>
		{/snippet}
	</Pagination.Root>
</div>

{#if data.payload.results.length > 0}
	<Table.Root>
		<Table.Caption
			>{data.payload.count} {data.selectedItem.label}
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

