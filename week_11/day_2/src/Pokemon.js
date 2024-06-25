import { useEffect, useState } from "react";
function Pokemon() {
  const [pokemon, setPokemon] = useState({});
  const [pokemonName, setPokemonName] = useState("pikachu");

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        `http://localhost:8080/pokemon/${pokemonName}`
      );
      const data = await response.json();
      setPokemon(data[0]);
    };

    fetchPokemon();
  }, [pokemonName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(e.target.elements[0].value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      {pokemon.name && <h1>{pokemon.name}</h1>}
      {pokemon.weight && <h1>{pokemon.weight}</h1>}
      {/* {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )} */}
    </>
  );
}

export default Pokemon;
