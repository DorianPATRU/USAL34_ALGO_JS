const generateMovieCard = (movie) => {
  const card = document.createElement("div");
  card.classList = "card";

  const title = document.createElement("h1");
  title.textContent = movie.title;
  card.appendChild(title);

  const metaContainer = document.createElement("div");
  metaContainer.classList = "card__meta";
  const releaseDate = document.createElement("span");
  releaseDate.classList = "card__release-date";
  releaseDate.textContent = `${movie.releaseDate}, ${movie.director}`;
  metaContainer.appendChild(releaseDate);
  card.appendChild(metaContainer);

  const actorsContainer = document.createElement("div");
  actorsContainer.classList = "card__actors";
  const actorsTitle = document.createElement("h3");
  actorsTitle.classList = "card__actors--title";
  actorsTitle.textContent = "Acteurs :";
  actorsContainer.appendChild(actorsTitle);
  const actors = document.createElement("ul");
  actors.classList = "card__actors--list";
  movie.actors.map((actor) => {
    const item = document.createElement("li");
    item.textContent = `${actor.firstname} ${actor.lastname} (${actor.birthdate})`;
    actors.appendChild(item);
  });
  actorsContainer.appendChild(actors);
  card.appendChild(actorsContainer);

  const genresContainer = document.createElement("div");
  genresContainer.classList = "card__genres";
  const genres = document.createElement("ul");
  genres.classList = "card__genres--list";
  movie.genres.map((genre) => {
    const item = document.createElement("li");
    item.textContent = genre;
    genres.appendChild(item);
  });
  genresContainer.appendChild(genres);
  card.appendChild(genresContainer);

  if (movie.favorite) {
    const favorite = document.createElement("div");
    favorite.innerHTML =
      '<svg class="favorite-icon" role="img" aria-hidden="true"><use xlink:href="#favorite-icon"></use></svg>';
    card.appendChild(favorite);
  }

  document.querySelector(".container").appendChild(card);
};

let movie1 = {
    title: "Batman Begins", 
    director: "Christopher Nolan", 
    releaseDate: 2005, 
    genres: ["Action, Adventure"], 
      actors: [ {firstname: "Christian", lastname: "Bale", birthdate: 1974,},
                {firstname: "Michael", lastname: "Caine", birthdate: 1933,},
                {firstname: "Ken", lastname: "Watanabe", birthdate: 1959,},
          ],
    favorite: true
}

let movie2 = {
    title: "Les gardiens de la galaxie", 
    director: "James Gunn", 
    releaseDate: 2014, 
    genres: ["Action, Adventure, Comedy"], 
      actors: [ {firstname: "Chris", lastname: "Pratt", birthdate: 1979,},
              {firstname: "Vin", lastname: "Diesel", birthdate: 1967,},
              {firstname: "Bradley", lastname: "Cooper", birthdate: 1975,},
        ],
    favorite: true
}

const movies = [movie1, movie2];
  movies.map((movie) => generateMovieCard(movie));

// TODO

function getTitle(movie) {
  console.log(movie.title);
}

function getFirstStar(movie) {
  console.log(movie.actors[0].firstname + " " + movie.actors[0].lastname);
}

getTitle(movie1) // Jurassic Park
getTitle(movie2) // Jurassic Park
getFirstStar(movie2) // 'Jeff Goldblum'

