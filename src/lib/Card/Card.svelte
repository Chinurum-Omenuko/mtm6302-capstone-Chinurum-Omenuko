<script lang="ts">
    export let imageURL: string;
    export let name: string;
</script>

<div id="card" class="frame">
    <div class="class">
        <div class="image-container">
            <img src={imageURL} alt="">
        </div>
        <div class="title">
            <h3>{name}</h3>
        </div>
    </div>
</div>

<style>
    #card{
        width: 100%;
        height: 100%;
        position: relative;
        background: var(--tertiary);
    }

</style>