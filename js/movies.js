/*
 * Se você está lendo isso, provavelmente ficou curioso.
 * Esses títulos vieram das minhas listas pessoais no Letterboxd.
 *
 * Quer explorar mais? https://letterboxd.com/destrytombrlivr/lists
 */

const movies = [

  // Thriller policial / criminal
  { title: "Carlito's Way (1993)", genre: "Thriller policial / criminal" },
  { title: "Jackie Brown (1997)", genre: "Thriller policial / criminal" },
  { title: "Fargo (1996)", genre: "Thriller policial / criminal" },
  { title: "To Live and Die in L.A. (1985)", genre: "Thriller policial / criminal" },
  { title: "Manhunter (1986)", genre: "Thriller policial / criminal" },
  { title: "Léon: The Professional (1994)", genre: "Thriller policial / criminal" },
  { title: "Serpico (1973)", genre: "Thriller policial / criminal" },
  { title: "Cape Fear (1991)", genre: "Thriller policial / criminal" },
  { title: "Dial M for Murder (1954)", genre: "Thriller policial / criminal" },
  { title: "Beverly Hills Cop (1984)", genre: "Thriller policial / criminal" },
  { title: "Beverly Hills Cop II (1987)", genre: "Thriller policial / criminal" },
  { title: "Vertigo (1958)", genre: "Thriller policial / criminal" },
  { title: "JFK (1991)", genre: "Thriller policial / criminal" },
  { title: "Hoffa (1992)", genre: "Thriller policial / criminal" },
  { title: "The Insider (1999)", genre: "Thriller policial / criminal" },
  { title: "Donnie Brasco (1997)", genre: "Thriller policial / criminal" },
  { title: "White Heat (1949)", genre: "Thriller policial / criminal" },
  { title: "Witness for the Prosecution (1957)", genre: "Thriller policial / criminal" },
  { title: "A Perfect World (1993)", genre: "Thriller policial / criminal" },
  { title: "Judgment at Nuremberg (1961)", genre: "Thriller policial / criminal" },

  // UFO
  { title: "Close Encounters of the Third Kind (1977)", genre: "UFO" },
  { title: "Village of the Damned (1960)", genre: "UFO" },
  { title: "Communion (1989)", genre: "UFO" },
  { title: "The Day the Earth Stood Still (1951)", genre: "UFO" },
  { title: "Hangar 18 (1980)", genre: "UFO" },
  { title: "Flight of the Navigator (1986)", genre: "UFO" },
  { title: "Arrival (2016)", genre: "UFO" },
  { title: "Cocoon (1985)", genre: "UFO" },
  { title: "They Live (1988)", genre: "UFO" },
  { title: "Bad Taste (1987)", genre: "UFO" },
  { title: "Starman (1984)", genre: "UFO" },
  { title: "The War of the Worlds (1953)", genre: "UFO" },
  { title: "Intruders (1992)", genre: "UFO" },
  { title: "Extraterrestrial (2014)", genre: "UFO" },
  { title: "The UFO Incident (1975)", genre: "UFO" },
  { title: "Edge of Tomorrow (2014)", genre: "UFO" },
  { title: "Forbidden Planet (1956)", genre: "UFO" },
  { title: "Fire in the Sky (1993)", genre: "UFO" },
  { title: "The Arrival (1996)", genre: "UFO" },
  { title: "Signs (2002)", genre: "UFO" },
  { title: "Earth vs. the Flying Saucers (1956)", genre: "UFO" },
  { title: "K-PAX (2001)", genre: "UFO" },
  { title: "Contact (1997)", genre: "UFO" },
  { title: "Monsters (2010)", genre: "UFO" },
  { title: "Invasion of the Body Snatchers (1978)", genre: "UFO" },

  // Terror
  { title: "The Shining (1980)", genre: "Terror" },
  { title: "Jaws (1975)", genre: "Terror" },
  { title: "Psycho (1960)", genre: "Terror" },
  { title: "Them! (1954)", genre: "Terror" },
  { title: "Split (2016)", genre: "Terror" },
  { title: "The Birds (1963)", genre: "Terror" },
  { title: "Rosemary's Baby (1968)", genre: "Terror" },
  { title: "The Blair Witch Project (1999)", genre: "Terror" },
  { title: "Invasion of the Body Snatchers (1978)", genre: "Terror" },
  { title: "Invasion of the Body Snatchers (1956)", genre: "Terror" },
  { title: "Cloverfield (2008)", genre: "Terror" },
  { title: "It (1990)", genre: "Terror" },
  { title: "The Ring (2002)", genre: "Terror" },
  { title: "The Brain That Wouldn't Die (1962)", genre: "Terror" },
  { title: "The Langoliers (1995)", genre: "Terror" },

  // Western
  { title: "Stagecoach (1939)", genre: "Western" },
  { title: "The Ox-Bow Incident (1943)", genre: "Western" },
  { title: "High Noon (1952)", genre: "Western" },
  { title: "Rio Bravo (1959)", genre: "Western" },
  { title: "Broken Arrow (1950)", genre: "Western" },
  { title: "Shenandoah (1965)", genre: "Western" },
  { title: "How the West Was Won (1962)", genre: "Western" },
  { title: "The Good, the Bad and the Ugly (1966)", genre: "Western" },
  { title: "3:10 to Yuma (1957)", genre: "Western" },
  { title: "She Wore a Yellow Ribbon (1949)", genre: "Western" },
  { title: "Once Upon a Time in the West (1968)", genre: "Western" },
  { title: "The Searchers (1956)", genre: "Western" },
  { title: "The Shootist (1976)", genre: "Western" },
  { title: "A Fistful of Dollars (1964)", genre: "Western" },
  { title: "Rio Grande (1950)", genre: "Western" },
  { title: "Bandolero! (1968)", genre: "Western" },
  { title: "Rio Lobo (1970)", genre: "Western" },
  { title: "Blazing Saddles (1974)", genre: "Western" },
  { title: "Gunfight at the O.K. Corral (1957)", genre: "Western" },
  { title: "Red River (1948)", genre: "Western" },

  // Cinema asiático
  { title: "Seven Samurai (1954)", genre: "Cinema asiático" },
  { title: "The Bad Sleep Well (1960)", genre: "Cinema asiático" },
  { title: "Ikiru (1952)", genre: "Cinema asiático" },
  { title: "Yojimbo (1961)", genre: "Cinema asiático" },
  { title: "High and Low (1963)", genre: "Cinema asiático" },
  { title: "Parasite (2019)", genre: "Cinema asiático" },
  { title: "Stray Dog (1949)", genre: "Cinema asiático" },
  { title: "Red Beard (1965)", genre: "Cinema asiático" },
  { title: "The Hidden Fortress (1958)", genre: "Cinema asiático" },
  { title: "Samurai Rebellion (1967)", genre: "Cinema asiático" },
  { title: "Harakiri (1962)", genre: "Cinema asiático" },
  { title: "Sanjuro (1962)", genre: "Cinema asiático" },
  { title: "Rashomon (1950)", genre: "Cinema asiático" },
  { title: "Throne of Blood (1957)", genre: "Cinema asiático" },
  { title: "I Live in Fear (1955)", genre: "Cinema asiático" },
  { title: "Train to Busan (2016)", genre: "Cinema asiático" },
  { title: "Deranged (2012)", genre: "Cinema asiático" },
  { title: "Pandora (2016)", genre: "Cinema asiático" },
  { title: "The Flu (2013)", genre: "Cinema asiático" },
  { title: "The Idiot (1951)", genre: "Cinema asiático" },

  // Noir
  { title: "Rififi (1955)", genre: "Noir" },
  { title: "The Maltese Falcon (1941)", genre: "Noir" },
  { title: "Ace in the Hole (1951)", genre: "Noir" },
  { title: "Sunset Boulevard (1950)", genre: "Noir" },
  { title: "Stray Dog (1949)", genre: "Noir" },
  { title: "Strangers on a Train (1951)", genre: "Noir" },
  { title: "Touch of Evil (1958)", genre: "Noir" },
  { title: "The Killing (1956)", genre: "Noir" },
  { title: "The Bad Sleep Well (1960)", genre: "Noir" },
  { title: "Chinatown (1974)", genre: "Noir" },
  { title: "The Third Man (1949)", genre: "Noir" },
  { title: "Double Indemnity (1944)", genre: "Noir" },
  { title: "The Amazing Dr. Clitterhouse (1938)", genre: "Noir" },
  { title: "Sweet Smell of Success (1957)", genre: "Noir" },
  { title: "Le Corbeau (1943)", genre: "Noir" },
  { title: "Night Has a Thousand Eyes (1948)", genre: "Noir" },
  { title: "Out of the Past (1947)", genre: "Noir" },
  { title: "Crossfire (1947)", genre: "Noir" },
  { title: "The Big Clock (1948)", genre: "Noir" },
  { title: "Angels with Dirty Faces (1938)", genre: "Noir" },
  { title: "Casablanca (1942)", genre: "Noir" },
  { title: "Family Plot (1976)", genre: "Noir" },
  { title: "The Wrong Man (1956)", genre: "Noir" },
  { title: "Call Northside 777 (1948)", genre: "Noir" },
  { title: "The Big Sleep (1946)", genre: "Noir" },
  { title: "Fury (1936)", genre: "Noir" },

  // Guerra
  { title: "Apocalypse Now (1979)", genre: "Guerra" },
  { title: "The Deer Hunter (1978)", genre: "Guerra" },
  { title: "Full Metal Jacket (1987)", genre: "Guerra" },
  { title: "Shame (1968)", genre: "Guerra" },
  { title: "The Caine Mutiny (1954)", genre: "Guerra" },
  { title: "Paths of Glory (1957)", genre: "Guerra" },
  { title: "Lawrence of Arabia (1962)", genre: "Guerra" },
  { title: "The Mountain Road (1960)", genre: "Guerra" },
  { title: "The Bridge on the River Kwai (1957)", genre: "Guerra" },
  { title: "All Quiet on the Western Front (1930)", genre: "Guerra" },
  { title: "To Be or Not to Be (1942)", genre: "Guerra" },
  { title: "Tora! Tora! Tora! (1970)", genre: "Guerra" },
  { title: "Patton (1970)", genre: "Guerra" },
  { title: "Fury (2014)", genre: "Guerra" },
  { title: "Strategic Air Command (1955)", genre: "Guerra" },
  { title: "The Best Years of Our Lives (1946)", genre: "Guerra" },
  { title: "The Longest Day (1962)", genre: "Guerra" },
  { title: "Sahara (1943)", genre: "Guerra" },
  { title: "Hell in the Pacific (1968)", genre: "Guerra" },
  { title: "Platoon (1986)", genre: "Guerra" },
  { title: "Stripes (1981)", genre: "Guerra" },
  { title: "Stalag 17 (1953)", genre: "Guerra" },
  { title: "Fort Apache (1948)", genre: "Guerra" },
  { title: "Crimson Tide (1995)", genre: "Guerra" },
  { title: "Action in the North Atlantic (1943)", genre: "Guerra" },

  // Existencial e reflexivo
  { title: "Ikiru (1952)", genre: "Existencial e reflexivo" },
  { title: "Wild Strawberries (1957)", genre: "Existencial e reflexivo" },
  { title: "The Seventh Seal (1957)", genre: "Existencial e reflexivo" },
  { title: "Wings of Desire (1987)", genre: "Existencial e reflexivo" },
  { title: "12 Angry Men (1957)", genre: "Existencial e reflexivo" },
  { title: "Gran Torino (2008)", genre: "Existencial e reflexivo" },
  { title: "Lost in Translation (2003)", genre: "Existencial e reflexivo" },
  { title: "Hero (1992)", genre: "Existencial e reflexivo" },
  { title: "São Paulo Sociedade Anônima (1965)", genre: "Existencial e reflexivo" },
  { title: "Deconstructing Harry (1997)", genre: "Existencial e reflexivo" },
  { title: "The 400 Blows (1959)", genre: "Existencial e reflexivo" },
  { title: "Papillon (1973)", genre: "Existencial e reflexivo" },
  { title: "Inherit the Wind (1960)", genre: "Existencial e reflexivo" },
  { title: "Lawrence of Arabia (1962)", genre: "Existencial e reflexivo" },
  { title: "Birdman or (The Unexpected Virtue of Ignorance) (2014)", genre: "Existencial e reflexivo" },
  { title: "Solaris (1972)", genre: "Existencial e reflexivo" },

  // Thriller psicológico
  { title: "The Night of the Hunter (1955)", genre: "Thriller psicológico" },
  { title: "American Psycho (2000)", genre: "Thriller psicológico" },
  { title: "Taxi Driver (1976)", genre: "Thriller psicológico" },
  { title: "A Shock to the System (1990)", genre: "Thriller psicológico" },
  { title: "A Clockwork Orange (1971)", genre: "Thriller psicológico" },
  { title: "Pulp Fiction (1994)", genre: "Thriller psicológico" },
  { title: "Strangers on a Train (1951)", genre: "Thriller psicológico" },
  { title: "One Flew Over the Cuckoo's Nest (1975)", genre: "Thriller psicológico" },
  { title: "Manhunter (1986)", genre: "Thriller psicológico" },
  { title: "The Bar (2017)", genre: "Thriller psicológico" },
  { title: "Carne (1991)", genre: "Thriller psicológico" },
  { title: "I Stand Alone (1998)", genre: "Thriller psicológico" },
  { title: "Triangle (2009)", genre: "Thriller psicológico" },
  { title: "The Silence of the Lambs (1991)", genre: "Thriller psicológico" },
  { title: "Sunset Boulevard (1950)", genre: "Thriller psicológico" },
  { title: "Parasite (2019)", genre: "Thriller psicológico" },
  { title: "The Cremator (1969)", genre: "Thriller psicológico" },
  { title: "The Caine Mutiny (1954)", genre: "Thriller psicológico" },
  { title: "The Exterminating Angel (1962)", genre: "Thriller psicológico" },
  { title: "High and Low (1963)", genre: "Thriller psicológico" },
  { title: "Jacob's Ladder (1990)", genre: "Thriller psicológico" },
  { title: "In the Mouth of Madness (1994)", genre: "Thriller psicológico" },
  { title: "Carrie (1976)", genre: "Thriller psicológico" },
  { title: "Instinct (1999)", genre: "Thriller psicológico" },
  { title: "Hannibal (2001)", genre: "Thriller psicológico" }
];

document.addEventListener("DOMContentLoaded", () => {
  const genreSelect = document.getElementById("movie-genre");  
  const movieTitle = document.getElementById("movie-title");
  const retryButton = document.getElementById("movie-retry");

  const genres = [...new Set(movies.map(movie => movie.genre))].sort();

  genreSelect.add(new Option("Escolha um gênero", ""));
  genres.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  });



  let lastMovie = null;

  function recommendMovie() {

    if (!genreSelect.value) {
      movieTitle.textContent = "";
      return;
    }
  
    const filtered = movies.filter(movie =>
      movie.genre === genreSelect.value &&
      movie !== lastMovie
    );

    if (!filtered.length) {
      movieTitle.textContent = lastMovie?.title || "Nenhum filme disponível";
      return;
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);

    lastMovie = filtered[randomIndex];
    movieTitle.textContent = lastMovie.title;
  }

  genreSelect.addEventListener("change", recommendMovie);
  retryButton.addEventListener("click", recommendMovie);

  recommendMovie();
});