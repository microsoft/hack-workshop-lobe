<svelte:head>
    <title>Dog shelter sample site</title>
</svelte:head>

<script>
    async function loadNamedDogs() {
        const response = await fetch('/api/named-dogs');
        return (await response.json()).namedDogs;
    }
</script>

<h1>Your named dogs</h1>
<div>Here's the list of all the dog names you've created</div>

{#await loadNamedDogs()}
    ...loading named dogs
{:then namedDogs} 
    <ul>
    {#each namedDogs as dog}
        <li><a href={dog.imageUrl}>{dog.dogType} as {dog.name}</a></li>    
    {/each}
    </ul>
{/await}