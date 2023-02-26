const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
let randQuote = Math.floor(Math.random() * 5);



export async function getQuotes() {
    const quotes = 'js/data.json';
    const res = await fetch(quotes);
    const data = await res.json();

    quote.textContent = data[randQuote].text;
    author.textContent = data[randQuote].author;
}

export function changeQuote() {
    randQuote = Math.floor(Math.random() * 5);
    getQuotes();
}