let pokemons = [];
const container = document.getElementById('container');

const nasafetch = async () => {
 const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
 const data = await response.json();

 return data.results;
};

nasafetch().then(data => {
 pokemons = data;

 pokemons.forEach(pokemon => {
   const div = document.createElement('div');
   div.innerText = `${pokemon.name}`;
   container.appendChild(div);
 });
});
