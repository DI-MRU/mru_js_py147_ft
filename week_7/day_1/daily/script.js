const planets = [
  {
    planetName: "Mercury",
    moons: 0,
    color: "grey",
  },
  {
    planetName: "Venus",
    moons: 0,
    color: "yellow",
  },
  {
    planetName: "Earth",
    moons: 1,
    color: "blue",
  },
  {
    planetName: "Mars",
    moons: 2,
    color: "red",
  },
  {
    planetName: "Jupiter",
    moons: 79,
    color: "orange",
  },
  {
    planetName: "Saturn",
    moons: 82,
    color: "brown",
  },
  {
    planetName: "Uranus",
    moons: 27,
    color: "lightblue",
  },
  {
    planetName: "Neptune",
    moons: 14,
    color: "darkblue",
  },
];

const listPlanets = document.getElementsByClassName("listPlanets")[0];
for (let planet of planets) {
  planetElement = document.createElement("div");
  planetElement.className = "planet";
  planetElement.style.backgroundColor = planet.color;
  planetElement.textContent = planet.planetName;
  listPlanets.appendChild(planetElement);

  for (let moons = 0; moons < planet.moons; moons++) {
    moonsElement = document.createElement("div");
    moonsElement.className = "moon";
    moonsElement.style.marginLeft = `${moons * 10}px`;
    planetElement.appendChild(moonsElement);
  }
}
