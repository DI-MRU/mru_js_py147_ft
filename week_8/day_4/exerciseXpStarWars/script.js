const container = document.querySelector(".container");
const findsomeone = document.querySelector("#findsomeone");
const loading = document.querySelector("#loading");

loading.style.display = "none";

function getPerson() {
  // Show the loading spinner
  loading.style.display = "inline-block"; // Display the loading spinner

  const random = Math.floor(Math.random() * 82) + 1; // Ensure ID is within the correct range
  fetch(`https://www.swapi.tech/api/people/${random}`)
    .then((response) => response.json())
    .then((data) => {
      const person = data.result.properties;

      // Fetch homeworld name
      fetch(person.homeworld)
        .then((response) => response.json())
        .then((homeworldData) => {
          const homeworldName = homeworldData.result.properties.name;
          container.innerHTML = `
            <h2>${person.name}</h2>
            <p>Height: ${person.height}</p>
            <p>Gender: ${person.gender}</p>
            <p>Birth Year: ${person.birth_year}</p>
            <p>Homeworld: ${homeworldName}</p>
          `;

          // Hide the loading spinner
          loading.style.display = "none";
        })
        .catch((error) => {
          container.innerHTML = `<p>Failed to load homeworld data. Please try again.</p>`;
          loading.style.display = "none";
        });
    })
    .catch((error) => {
      container.innerHTML = `<p>Failed to load character data. Please try again.</p>`;
      loading.style.display = "none";
    });
}

findsomeone.addEventListener("click", getPerson);
