document. addEventListener('DOMContentLoaded',() => {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const newQuoteBtn = document.getElementById('newQuote');
 
    let quotes = JSON.parse(localStorage.getItem('quotes')) || [
    {
      text: "Sometimes we fail only to come back stronger. Remember failing is a mistake but staying down is an option",
      category: "Motivation"
    }
  ];

  function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
  }
  
 const quotes = [
       {
       text:"Sometimes we fail only to come back stronger.Remember failing is a mistake but staying down is an option." 
       category: "Motivation "
        }
    ];

   function showRandomQuote() {
     const randomIndex = Math.floor(Math.random() * quotes.length);
     const randomQuote = quotes[randomIndex];
    quoteDisplay.innerHTML = quotes[randomIndex].text;
   }

 newQuoteBtn.addEventListener('click', showRandomQuote);
 showRandomQuote();

 function addQuote() {
  const quoteText = document.getElementById('newQuoteText').value;
  const quoteCategory = document.getElementById('newQuoteCategory').value;

  quotes.push({
    text: quoteText,
    category: quoteCategory
  });

  showRandomQuote();
}


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

 function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }
  
});