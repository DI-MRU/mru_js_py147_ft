import { useState, useEffect, createContext } from "react";
import Nav from "./nav";
import { Count } from "./Count";
import InputWithState from "./test";
import Pokemon from "./Pokemon";

export const Context = createContext();

const App = () => {
  // const [pokemon, setPokemon] = useState("pikachu");
  const [signup, setSignup] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setPokemon(e.target.elements[0].value);
  // };

  // useEffect(() => {
  //   const fetchPokemon = async () => {
  //     const response = await fetch(
  //       `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  //     );
  //     const data = await response.json();
  //     setPokemon(data);
  //   };
  //   fetchPokemon();
  // }, [pokemon]);

  return (
    <Context.Provider value={[signup, setSignup]}>
      <div className="App">
        <Pokemon />
        {/* <Count /> */}
        {/* <InputWithState /> */}
        {/* parent */}
        {/* <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">search</button>
      </form>
      <h1>{pokemon.name}</h1>
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt="none" />
      )} */}
        {/* <Nav /> child */}
        {/* <h1>{signup ? "Sign in" : "Sign out"}</h1> */}
      </div>
    </Context.Provider>
  );
};

export default App;
