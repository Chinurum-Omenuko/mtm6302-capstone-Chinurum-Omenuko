export const ssr = false

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon")
    const pokemons = await res.json()
    return { pokemons };
}