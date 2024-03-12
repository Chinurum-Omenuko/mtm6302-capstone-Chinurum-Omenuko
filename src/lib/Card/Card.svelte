<!-- TypeScript script block for the Svelte component -->
<script lang="ts">
    // Exporting 'imageURL' and 'name' as props that can be passed to this component
    export let imageURL: string;
    export let name: string;
</script>

<!-- HTML structure of the component -->
<div id="card" class="frame">
    <div class="canvas">
        <!-- Container for the image -->
        <div class="image-container">
            <!-- Image element with the source set to the 'imageURL' prop -->
            <img src={imageURL} alt="">
        </div>
        <!-- Container for the title -->
        <div class="title">
            <!-- Heading element displaying the 'name' prop -->
            <h3>{name}</h3>
        </div>
    </div>
</div>

<!-- CSS styles for the component -->
<style>
    #card{
        width: 100%;
        height: 100%;
        position: relative;
        background: var(--tertiary);
        display: flex;
        justify-content: center;
    }

    .image-container{
        height: 30vh;
        overflow: hidden;
    }

    img{
        height: 30vh;
    }

    .title{
        text-align: center;
        background-color: rgb(4, 0, 76);
        border-radius: 5cap; /* This seems to be a typo, it should be '5px' for a border radius */
    }

    h3{
        color: var(--fourth);
        font-family: 'PressStart';
    }
</style>
