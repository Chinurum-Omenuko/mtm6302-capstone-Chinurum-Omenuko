<script>
  import Navbar from "$lib/Navbar/Navbar.svelte";
  import "../app.css";
  export const prerender = true;

</script>

<Navbar />
<slot />