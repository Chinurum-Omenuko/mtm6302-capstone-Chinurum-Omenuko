<script lang="ts">
  import Card from "$lib/Card/Card.svelte";

    
</script>

<main id="main-grid">
    <Card imageURL={'www.google.com'} name={"Pikachu"}/>
    <Card imageURL={'www.google.com'} name={"Pikachu"}/>
    <Card imageURL={'www.google.com'} name={"Pikachu"}/>
    <Card imageURL={'www.google.com'} name={"Pikachu"}/>
    <Card imageURL={'www.google.com'} name={"Pikachu"}/>
</main>

<style>
    #main-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 300px 300px;
        gap: 30px;
        margin: 0 20px;

        border: solid 2px white;
        margin: 20px 20px;
        padding: 20px;
        height: 100vh;
    }
    @media screen and (max-width: 900px){
        #main-grid{
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media screen and (max-width: 600px){
        #main-grid{
            grid-template-columns: repeat(1, 1fr);
        }
    } 
</style>