/*   let movie1 = {
    title: "Jurassic Park",
    releaseDate: 1993,
    director: "Steven Spielberg",
    genres: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    presentation: function() {
      return `${this.title}, réalisé par ${this.director} en ${this.releaseDate}`
    }
  };

  let movie2 = {
    title: "Le monde perdu: Jurrasic Park",
    releaseDate: 1997,
    director: "Steven Spielberg",
    genres: ["Action", "Adventure", "Sci-Fi"],
    presentation: function() {
      return `${this.title}, réalisé par ${this.director} en ${this.releaseDate}`
    }
  }; */
  
  //console.log(
   //   movie1, movie2
   // )

   let Film = function(title, releaseDate, director) {
       this.title = title
       this.releaseDate = releaseDate
       this.director = director
       this.genres = this.genres

       this.presentation = function() {
         return `${this.title}, réalisé par ${this.director} en ${this.releaseDate}`
       }
   }

   let genres = ["Action", "Adventure", "Sci-Fi", "Thriller"]

   let movie1 = new Film('Jurassic Park', 1993, 'Steven Spielberg', genres)
   
   let movie2 = Object.create(movie1)
   movie2.title = "Jurassic Park 2"
   movie2.releaseDate = 1997

   movie2.donnerUneNote = function(note) {
     this.note = note
   }

   movie2.donnerUneNote(8)

   // let movie2 = new Film('Jurassic Park 2', 1997, 'Steven Spielberg', genres)
   
   
   
   console.log(movie2)