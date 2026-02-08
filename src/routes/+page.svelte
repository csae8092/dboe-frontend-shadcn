<script lang="ts">
    import { appConfig } from "$lib/constants";
    const { data } = $props()
</script>

<h1 class="text-center text-3xl">{appConfig.title}</h1>

<h2 class="text-center text-2xl">{ data.username }</h2>
<h3 class="text-center text-1xl">{ data.usertoken }</h3>
