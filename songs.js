const artists = [
    {
         id: 581829,
         name: "Elton John & Stevie Nicks"
    },
    {
         id: 9763,
         name: "Stevie Nicks"
    },
    {
         id: 11465,
         name: "Stevie Nicks & Kenny Loggins"
    },
 ];

 function renderArtists(nameList) {
    let result = "<ul>"; 
    for (let item of nameList) {
        result += `
            <li class="m-4">
                ${item.name} 
                <button data-id="${item.id}" class="btn btn-primary">Get Quote</button>
            </li>`;
    }
    result += "</ul>";

    document.querySelector(".js-artists").innerHTML = result;
 }

 renderArtists(artists);

 function renderQuote(response) {
    document.querySelector(".js-quote").innerHTML = `
        <h2>${response.artist}: ${response.song}</h2>
        <p>
           ${response.lyrics_excerpt.replaceAll("\n", "<br />")}
        </p>
    `; 
 }

 function displaySongQuote(artistId) {
    fetch("https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=" + artistId)
         .then(data => data.json())
         .then(renderQuote);
 }
 
 function jsArtistsContainerClicked(event) {
    if(event.target.tagName === "BUTTON") {
       displaySongQuote(event.target.dataset.id);
    }
 }

 document.querySelector(".js-artists").addEventListener('click', jsArtistsContainerClicked);

function searchFormSubmitted(event) {
      event.preventDefault();
      let inputField = document.querySelector('[name="search-artist"]');
      console.log(inputField.value);
      inputField.value = "";
}

 document.querySelector(".js-search-form").addEventListener("submit", searchFormSubmitted);
