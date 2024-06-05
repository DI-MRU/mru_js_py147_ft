const robotsContainer = document.getElementById("robots-container");
const search = document.getElementById("search");

const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

// Display all robots
function displayRobots() {
  // Clear the container
  robotsContainer.innerHTML = "";
  // Loop through the robots array and display each robot
  robots.forEach((robot) => {
    // Create a div element for each robot
    const robotCard = document.createElement("div");
    robotCard.id = "robot-card";
    robotCard.innerHTML = `
        <img src="${robot.image}" alt="${robot.name}" />
        <h2>${robot.name}</h2>
        <p>${robot.username}</p>
        <p>${robot.email}</p>
      `;
    robotsContainer.appendChild(robotCard);
  });
}

displayRobots();

// Filter robots based on the search input
search.addEventListener("input", () => {
  const searchValue = search.value.toLowerCase();
  const filteredRobots = robots.filter((robot) => {
    return (
      robot.name.toLowerCase().includes(searchValue) ||
      robot.username.toLowerCase().includes(searchValue) ||
      robot.email.toLowerCase().includes(searchValue)
    );
  });
  robotsContainer.innerHTML = "";

  // the use of forEach method to loop through the filteredRobots array
  // filteredRobots.forEach((robot) => {
  //   const robotCard = document.createElement("div");
  //   robotCard.id = "robot-card";
  //   robotCard.innerHTML = `
  //       <img src="${robot.image}" alt="${robot.name}" />
  //       <h2>${robot.name}</h2>
  //       <p>${robot.username}</p>
  //       <p>${robot.email}</p>
  //     `;

  // normal loop
  for (let i = 0; i < filteredRobots.length; i++) {
    const robot = filteredRobots[i];
    const robotCard = document.createElement("div");
    robotCard.id = "robot-card";
    robotCard.innerHTML = `
        <img src="${robot.image}" alt="${robot.name}" />
        <h2>${robot.name}</h2>
        <p>${robot.username}</p>
        <p>${robot.email}</p>
      `;

    robotsContainer.appendChild(robotCard);
  }
});
