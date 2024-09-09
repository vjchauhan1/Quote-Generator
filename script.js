let quoteContainer = document.getElementById('quote-container');
let quote = document.getElementById('quote');
let author = document.getElementById('author');
let newQuoteBtn = document.getElementById('new-quote');

//funtion to fetch quote
function getQuote() {
    axios.get("https://api.quotable.io/random")
    .then(res => {
        let data = res.data;
        quote.innerText = data.content;
        author.innerText = data.author || "Anonymous";
    })
    .catch(error => {
        quote.innerText = "Could not fetch quote.";
        author.innerText = "";
    });
}
//eventlisteners
newQuoteBtn.addEventListener('click', getQuote);
window.addEventListener('load', getQuote);
