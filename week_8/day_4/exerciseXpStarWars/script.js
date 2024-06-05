const container = document.querySelector(".container");
const findsomeone = document.querySelector("#findsomeone");
const loading = document.querySelector("#loading");

loading.style.display = "none";

function getPerson() {
  // Show the loading spinner
  loading.style.display = ""; // Display the loading spinner

  const random = Math.floor(Math.random() * 82);
  fetch(`https://www.swapi.tech/api/people/${random}`)
    .then((response) => response.json())
    .then((data) => {
      const person = data.result.properties;
      container.innerHTML = `
            <h2>${person.name}</h2>
            <p>Height: ${person.height}</p>
            <p>Gender: ${person.gender}</p>
            <p>Birth Year: ${person.birth_year}</p>
            <p>Homeworld: ${person.homeworld}</p>
            `;

      // Hide the loading spinner
      loading.style.display = "none";
    })
    .catch((error) => {
      console.error(error);
      container.innerHTML = `<p>Failed to load data. Please try again.</p>`;
      loading.style.display = "none";
    });
}

findsomeone.addEventListener("click", getPerson);
