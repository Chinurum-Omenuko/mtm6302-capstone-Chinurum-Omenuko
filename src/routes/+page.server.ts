export const ssr = false

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon")
    const pokemon = await res.json()
    console.log(pokemon)
    return { pokemon };
}