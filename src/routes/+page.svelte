<script lang="ts">
    import { appConfig } from "$lib/constants";
    const { data } = $props()
</script>

<h1 class="text-center text-3xl">{appConfig.title}</h1>

<h2 class="text-center text-2xl">{ data.userData.username }</h2>
