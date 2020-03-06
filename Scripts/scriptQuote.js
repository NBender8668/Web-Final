const quote = document.getElementById('quote');

let url = `http://quotes.rest/qod.json`;

fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        quote.innerHTML = data.contents.quotes[0].quote;
      })
      .catch(e => console.log(e));

// "https://theysaidso.com/img/qod/qod-inspire.jpg"
 