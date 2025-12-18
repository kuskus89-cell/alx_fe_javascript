document. addEventListener('DOMContentLoaded',() => {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const newQuoteBtn = document.getElementById('newQuote');
 
 const quotes = [
       {
       text:"Sometimes we fail only to come back stronger.Remember failing is a mistake but staying down is an option." 
       category: "Motivation "
        }
    ];

   function showRandomQuote() {
     const randomIndex = Math.floor(Math.random() * quotes.length);
     const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = quotes[randomIndex].text;
   }

 newQuoteBtn.addEventListener('click', showRandomQuote);
 showRandomQuote();

 function createAddQuoteForm(){
  const form = document.createElement('form');

const quoteInput = document.createElement('input');
 quoteInput.placeholder = 'Enter quote text';

 const categoryInput = document.createElement('input');
 categoryInput.placeholder = 'Enter  quote category';

const addButton = document.createElement('button');
 addButton.type = 'submit';

 form.appendChild(quoteInput);
 form.appendChild(categoryInput);
 form.appendChild(addButton);
 }

 form.addEventListener('submit', (e) =>{
  e.preventDefault();

  quotes.push({
    text:quoteInput.value,
    category:categoryInput.value
  });
  quoteInput.value = '';
  categoryInput.value = '';

  showRandomQuote();
 }); 
 
 document.body.appendChild(form);
createAddQuoteForm();
});