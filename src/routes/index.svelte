<script>
    let imageUrl = '';
    let dogType = '';
    let message = '';
    let name = '';

    import { onMount } from "svelte";

    // Load first dog for display
    onMount(loadDog);

    async function loadDog() {
        const result = await fetch(
            "https://dog.ceo/api/breeds/image/random/1/alt"
        );
        const imageInfo = (await result.json()).message[0];
        imageUrl = imageInfo.url;
        dogType = imageInfo.altText;
        if (dogType.endsWith("dog dog")) // removes dog dog
            dogType = imageInfo.altText.substring(
                0, imageInfo.altText.lastIndexOf(" ")
            );
    }

    async function nameDog() {
        message = 'Saving dog...';
        const result = await fetch("/api/save-dog", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ imageUrl, dogType, name }),
        });
        const json = await result.json();
        message = `Saved ${dogType} as ${name}`;
        name = '';
        await loadDog();
    }

    async function nextDog() {
        message = "They're all good dogs";
        await loadDog();
    }

    async function getUserInfo() {
        // retrieve the current user from Azure Static Web Apps
        const response = await fetch("/.auth/me");
        // get the JSON
        const payload = await response.json();
        // clientPrincipal is the property with the information
        if (payload.clientPrincipal) {
            // user is authenticated
            // userDetails contains the username
            return payload.clientPrincipal.userDetails;
        } else {
            // if clientPrincipal is null, the session is anonymous
            return null;
        }
    }
</script>

<svelte:head>
    <title>Dog shelter sample site</title>
</svelte:head>
<article class="index">
    <h2>Name dogs!</h2>
    <p>
        One way families can begin to get excited about adopting a dog is to
        begin thinking of possible names. After logging in, you can come up with
        names you think would work! Later on, you can <a href="named-dogs"
            >review the list</a
        > of names you came up with.
    </p>

    {#if message}
        <div class="message">{message}</div>
    {/if}

    {#await getUserInfo()}
        Getting user info...
    {:then username}
        {#if username}
            <div class="center">
                Welcome, {username}! See your
                <a href="named-dogs">named dogs</a>!
            </div>

            <div class="header center">
                What would you call this cute {dogType}?
            </div>

            <div class="vote-button-container center">
                <input class="name-input" type="text" bind:value={name} />
                <button class="vote-button" on:click={nameDog}>
                    <span class="fas fa-vote-yea icon" />
                    Save name!
                </button>
                <button class="vote-button" on:click={nextDog}>
                    <span class="fas fa-forward icon" />
                    Cute dog! But but best for someone else.
                </button>
            </div>
        {:else}
            <div class="center">
                <a href="/.auth/login/github" class="center">Login to name the dogs!</a>
            </div>
            <div class="header center">
                Isn't this a cute {dogType}?
            </div>
        {/if}
    {/await}
    <div>
        <img src={imageUrl} alt={dogType} />
    </div>
</article>

<style>
    img {
        width: 90%;
        margin: auto;
    }
    .message {
        border-radius: 5px;
        border-style: solid;
        border-color: black;
        border-width: 2px;
        margin-bottom: 10px;
        padding: 5px;
        background-color: lightgreen;
        text-align: center;
    }
    .icon {
        display: block;
        margin-bottom: 4px;
    }
    .vote-button {
        text-align: center;
        font-weight: bold;
        display: flexbox;
        vertical-align: top;
        margin-bottom: 10px;
    }
    .vote-button-container {
        vertical-align: middle;
    }
    .header {
        font-size: 1.5rem;
        font-weight: bold;
    }
    .center {
        text-align: center;
        vertical-align: middle;
    }
    .name-input {
        font-size: 1.8em;
    }
</style>
