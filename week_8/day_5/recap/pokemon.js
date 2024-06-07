console.log("Start of pokemon.js");

/**
 * Fetches pokemon data from pokeapi.co
 * @param {*} pokeName The pokemon name. Default is pikachu.
 * @returns The response from the fetch call.
 */
async function fetchPokemon(pokeName = "pikachu") {
  // Get the elements
  const headingNameEl = document.querySelector("#poke-heading-name");
  const errorBannerEl = document.querySelector("#error-banner");
  const nameEl = document.querySelector("#poke-name");
  const weightEl = document.querySelector("#poke-weight");
  const heightEl = document.querySelector("#poke-height");

  try {
    // Fetch the data
    const pokeResp = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    );

    // Check if the response is ok
    if (!pokeResp.ok) {
      errorBannerEl.style.visibility = "visible";
      console.error("Error in fetching data");
    }

    // Parse the response as JSON
    const pokemon = await pokeResp.json();

    // Check if the pokemon is not found
    if (!pokemon) {
      errorBannerEl.style.visibility = "visible";
      console.error("Error in fetching json");
    }

    errorBannerEl.style.visibility = "hidden";

    const imagesEl = document.querySelector("#poke-images");

    // Capitalize the first letter of the pokemon name
    const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    // Set the values
    headingNameEl.innerText = pokemonName;
    nameEl.innerText = pokemonName;
    weightEl.innerText = pokemon.weight;
    heightEl.innerText = pokemon.height;

    // Create the images; front and back sprites
    const spriteFront = document.createElement("img");
    spriteFront.src = pokemon.sprites.front_default;
    imagesEl.appendChild(spriteFront); // Add the image element to the images div

    const spriteBack = document.createElement("img");
    spriteBack.src = pokemon.sprites.back_default;
    imagesEl.appendChild(spriteBack); // Add the image element to the images div
  } catch (error) {
    // Catch any errors if the fetch fails

    const errorText = "Error";

    errorBannerEl.style.visibility = "visible";
    errorBannerEl.innerText = "Something went wrong. Please try again.";
    headingNameEl.innerText = errorText;
    nameEl.innerText = errorText;
    weightEl.innerText = errorText;
    heightEl.innerText = errorText;
  }

  return pokeResp;
}

// Handle the form submission for a new pokemon fetch
const searchForm = document.querySelector("#poke-search-form");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();

  // Get the input value; ensure it is case insensitive
  const searchInput = document.querySelector("#poke-search-name");
  const pokeName = searchInput.value.toLowerCase();

  // Get the elements
  const headingNameEl = document.querySelector("#poke-heading-name");
  const nameEl = document.querySelector("#poke-name");
  const weightEl = document.querySelector("#poke-weight");
  const heightEl = document.querySelector("#poke-height");
  const imagesEl = document.querySelector("#poke-images");

  imagesEl.innerHTML = ""; // Empty the images div of all images

  // Set the values to loading
  headingNameEl.innerText = "Loading...";
  nameEl.innerText = "Loading...";
  weightEl.innerText = "Loading...";
  heightEl.innerText = "Loading...";

  fetchPokemon(pokeName);
});

fetchPokemon();

console.log("End of pokemon.js");
