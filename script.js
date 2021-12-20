/** @format */

let characters = document.querySelector("#characters");
characters.addEventListener("click", fetchCharacters); // Calls fectch Characters function

let episodes = document.querySelector("#episodes");
episodes.addEventListener("click", fetchEpisodes); // Calls fectch Episodes function

let quotes = document.querySelector("#quotes");
quotes.addEventListener("click", fetchQuotes); // Calls fectch Quotes function

let deaths = document.querySelector("#deaths");
deaths.addEventListener("click", fetchDeaths); // Calls fectch Deaths function

// Function to fetch Characters using API
async function fetchCharacters() {
	let output = document.querySelector(".output");
	output.innerHTML = ""; // Clears the contents of output class
	let outputTitle = document.querySelector("#outputtitle");
	outputTitle.innerText = "Characters";

	let res = await fetch(`https://www.breakingbadapi.com/api/characters`);
	let results = await res.json();
	results.map((character) => createCharacters(character));
}

// fumction to create characters list
function createCharacters(character) {
	let outputString = document.createElement("div");
	outputString.setAttribute("class", "character-info");
	outputString.innerHTML = `<img src="${character.img}"">
        <div class= display-info>
        <h4><span> Name :</span> ${character.portrayed}</h4>
        <p><span>Actor Name :</span> ${character.name} </p>
        <p><span>Nick Name :</span> ${character.nickname}</p>
        <p><span>DOB :</span> ${character.birthday}</p>
        <p><span>Status :</span> ${character.status}</p>
        </div>`;
	let output = document.querySelector(".output");
	output.appendChild(outputString);
	console.log(output);
}

// Function to fetch Episodes using API
async function fetchEpisodes() {
	let output = document.querySelector(".output");
	output.innerHTML = ""; //--Clears the contents of output class
	let outputTitle = document.querySelector("#outputtitle");
	outputTitle.innerText = "Episodes";
	let res = await fetch(`https://www.breakingbadapi.com/api/episodes`);
	let results = await res.json();
	results.map((episode) => createEpisodes(episode));
}
// fumction to create Episodes list
function createEpisodes(episode) {
	let outputString = document.createElement("div");
	outputString.setAttribute("class", "episode-info");
	outputString.innerHTML = `<h3>${episode.title}</h3>
           <hr>
          <p><span>Season :</span> ${episode.season} </p>
          <p><span>Release Date :</span> ${episode.air_date}</p>
          <p><span>Episode :</span> ${episode.episode}</p>
          <p><span>Characters :</span> ${episode.characters}</p>`;
	let output = document.querySelector(".output");
	output.appendChild(outputString);
}

// Function to fetch Quotes using API
async function fetchQuotes() {
	let output = document.querySelector(".output");
	output.innerHTML = ""; // Clears the contents of output class
	let outputTitle = document.querySelector("#outputtitle");
	outputTitle.innerText = "Quotes";
	let res = await fetch(`https://breakingbadapi.com/api/quotes`);
	let results = await res.json();
	results.map((quote) => createQuotes(quote));
}

// fumction to create Quotes list
function createQuotes(quote) {
	let outputString = document.createElement("div");
	outputString.setAttribute("class", "quote-info");
	outputString.innerHTML = `<h4>${quote.quote}</h4>
            <p><span>Author :</span> ${quote.author} </p>`;
	let output = document.querySelector(".output");
	output.appendChild(outputString);
}

// Function to fetch Deaths using API
async function fetchDeaths() {
	let output = document.querySelector(".output");
	output.innerHTML = ""; // Clears the contents of output class
	let outputTitle = document.querySelector("#outputtitle");
	outputTitle.innerText = "Deaths";
	let res = await fetch(`https://breakingbadapi.com/api/deaths`);
	let results = await res.json();
	console.log(results);
	results.map((deaths) => createDeathlist(deaths));
}

// fumction to create Deaths list
function createDeathlist(deaths) {
	let outputString = document.createElement("div");
	outputString.setAttribute("class", "death-info");
	outputString.innerHTML = `<h3>${deaths.death}</h3>
               <hr>
              <p><span>Cause :</span> ${deaths.cause}</p>
              <p><span>Responsible :</span> ${deaths.responsible} </p>
              <p><span>Last Words :</span> ${deaths.last_words} </p>`;
	let output = document.querySelector(".output");
	output.appendChild(outputString);
}
