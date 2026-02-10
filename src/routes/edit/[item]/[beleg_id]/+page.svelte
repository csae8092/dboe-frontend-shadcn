<script lang="ts">
	import { fieldsToExclude } from '$lib/constants.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import Label from '$lib/components/ui/label/label.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
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
				<Table.Head class="text-center">edit</Table.Head>
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
					<Table.Cell>
						<Dialog.Root>
							<Dialog.Trigger type="button" class={buttonVariants({ variant: 'outline' })}
								>Edit Item</Dialog.Trigger
							>
							<Dialog.Content>
								<form method="POST">
									<Dialog.Header>
										<Dialog.Title>Edit {params.item}: ID {row.id}</Dialog.Title>
										<Dialog.Description>Modify the object and click submit</Dialog.Description>
									</Dialog.Header>
									<div class="grid gap-4">
										{#each Object.entries(row) as [key, value], fid}
											{#if !fieldsToExclude.includes(key)}
												{#if key === 'id' || key === 'beleg'}
													<Input type="hidden" id={`${key}-${fid}`} name={key} {value} />
												{:else}
													<div class="grid gap-3" id={`modify-field-${fid}`}>
														<Label for={`${key}-${fid}`}>{key}</Label>
														<Input id={`${key}-${fid}`} name={key} {value} />
													</div>
												{/if}
											{/if}
										{/each}
									</div>
									<Dialog.Footer>
										<Dialog.Close class={buttonVariants({ variant: 'outline' })}
											>Cancel</Dialog.Close
										>
										<Button type="submit">Save changes</Button>
									</Dialog.Footer>
								</form>
							</Dialog.Content>
						</Dialog.Root>
					</Table.Cell>
					{#each Object.entries(row) as [key, value], tdid}
						{#if key === 'id'}
							<Table.Cell id={`td-id-${tdid}`}
								><a class="underline decoration-dotted" href={`${row.url}?format=json`}>{value}</a
								></Table.Cell
							>
						{:else if !fieldsToExclude.includes(key)}
							<Table.Cell id={`td-id-${tdid}`}>{value}</Table.Cell>
						{/if}
					{/each}
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
{/if}
