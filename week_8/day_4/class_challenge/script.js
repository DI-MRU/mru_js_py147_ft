const container = document.querySelector(".container");
const findsomeone = document.getElementById("findsomeone");
const loading = document.getElementById("loading");

// set loading to display none
loading.style.display = "none";

const StarWarsCharacters = async () => {
  // clear the container
  container.innerHTML = "";
  // set loading to display inline-block
  loading.style.display = "inline-block";
  try {
    const random = Math.floor(Math.random() * 82) + 1;
    await fetch(`https://swapi.dev/api/people/${random}`)
      .then((res) => res.json())
      .then((data) => {
        const character = data;

        fetch(character.homeworld)
          .then((res) => res.json())
          .then((data) => {
            character.homeworld = data.name;
            container.innerHTML = `
            </h1>${character.name}</h1>
            <p>Height: ${character.height}</p>
            <p>Gender:  ${character.gender}</p>
            <p>Birth Year: ${character.birth_year}</p>
            <p>Homeworld: ${character.homeworld}</p>
            `;
          });

        // set loading to display none
        loading.style.display = "none";
      });
  } catch (error) {
    loading.style.display = "none";
    container.innerHTML = `<p>Oh no the person is not available</p>`;
  }
};

findsomeone.addEventListener("click", () => {
  StarWarsCharacters();
});
