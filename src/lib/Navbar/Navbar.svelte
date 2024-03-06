<script lang="ts">
    import setting from "../images/setting.svg"
    import userpic from "../images/user.png"
    const accountName: String = "Name";

</script>
<nav>
    <div>
        <img src={setting} alt="">
    </div>
    <h1>PokeDex</h1>
    <div><img src={userpic} alt=""></div>
</nav>

<style>
    nav{
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        padding: 20px 0;
        min-height: 10vh;
        background: var(--primary); 
    }

    h1{
        color: yellow;
        font-family: 'Pokefont';
        font-size: 2rem;
    }

    h2{
        color: var(--secondary);
    }

</style>