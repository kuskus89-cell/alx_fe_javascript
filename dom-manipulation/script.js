document. addEventListener('DOMContentLoaded',() => {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const newQuoteBtn = document.getElementById('newQuote');
 
 const quotes = [
       {

       text:"Sometimes we fail only to come back stronger.Remember failing is a mistake but staying down is an option" 
       category: "Motivation "

        }
    ];

   function showRandomQuote() {
     const randomIndex = Math.floor(Math.random() * quotes.length);
     const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = randomQuote.text;
   }

   showRandomQuote();

 newQuoteBtn.addEventListener('click', showRandomQuote);

 function createAddQuoteForm(){
  const form = document.createElement('form');

const quoteInput = document.createElement('input');
 quoteInput.placeholder = 'Enter Quote Text';

 const categoryInput = document.createElement('input');
 categoryInput.placeholder = 'Enter  quote category';

const addButton = document.createElement('button');
 addButton.textContent = 'Add Quote';

 form.appendChild('quoteInput');
 form.appendChild('categoryInput');
 form.appendChild('addButton');

 document.body.appendChild(form);
 }

 form.addEventListener('submit', function (Enter){
  enter.preventDefault();

  quotes.push({
    text:quoteInput.value,
    category:categoryInput.value
  })
 })
});