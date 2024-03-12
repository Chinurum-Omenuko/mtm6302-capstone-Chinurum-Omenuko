<!-- Importing the Card component from a local file -->
<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    // Declaring a prop named 'data' that will be passed to this component
    export let data;
    // Logging the 'pokemons' property of the 'data' object to the console
    console.log(data.pokemons)
</script>

<!-- The main container for the grid of Pokémon cards -->
<main id="main-grid">
    <!-- Looping through each Pokémon in the 'data.pokemons.results' array -->
    {#each data.pokemons.results as pokemon, index}
        <!-- Creating a Card component for each Pokémon -->
        <!-- Passing the Pokémon's image URL and name as props to the Card component -->
        <Card imageURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} name={pokemon.name}/>
    {/each}
</main>

<!-- Styling the main grid container -->
<style>
    #main-grid{
        display: grid; /* Using CSS Grid for layout */
        grid-template-columns: repeat(3, 1fr); /* Creating 3 columns of equal width */
        grid-auto-rows: 300px 300px; /* Setting the row height to 300px */
        gap: 30px; /* Setting the gap between grid items to 30px */
        margin: 0 20px; /* Adding margin around the grid */

        margin: 20px 20px; /* Overwriting the previous margin with a 20px margin on all sides */
        padding: 20px; /* Adding padding inside the grid */
        height: 100vh; /* Setting the grid's height to 100% of the viewport height */
    }
    /* Responsive design: Adjusting the grid layout for smaller screens */
    @media screen and (max-width: 900px){
        #main-grid{
            grid-template-columns: repeat(2, 1fr); /* Reducing to 2 columns on screens smaller than 900px */
        }
    }
    @media screen and (max-width: 600px){
        #main-grid{
            grid-template-columns: repeat(1, 1fr); /* Reducing to 1 column on screens smaller than 600px */
        }
    } 
</style>
