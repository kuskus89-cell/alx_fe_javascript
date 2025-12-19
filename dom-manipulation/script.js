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

 document.getElementById('exportQuotes').addEventListener('click', () => {
  const data = JSON.stringify(quotes, null, 2);

  const blob = new Blob([data], { type: 'application/json' });

  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'quotes.json';
  a.click();

  URL.revokeObjectURL(url);
   });
 
document.getElementById('importQuotes').addEventListener('change', (event) => {
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

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(quotes)
});

function populateCategories() {
  const categorySelect = document.getElementById('categoryFilter');

  // Clear old options (except "All")
  categorySelect.innerHTML = '<option value="all">All</option>';

  // Get unique categories using Set
  const categories = [...new Set(quotes.map(q => q.category))];

  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

function filterQuotes() {
  const selectedCategory = document.getElementById('categoryFilter').value;
  const quoteDisplay = document.getElementById('quoteDisplay');

  // Save selected filter
  localStorage.setItem('selectedCategory', selectedCategory);

  quoteDisplay.innerHTML = '';

  const filteredQuotes = selectedCategory === 'all'
    ? quotes
    : quotes.filter(q => q.category === selectedCategory);

  filteredQuotes.forEach(quote => {
    const p = document.createElement('p');
    p.textContent = quote.text;
    quoteDisplay.appendChild(p);
  });
}

function restoreLastFilter() {
  const savedCategory = localStorage.getItem('selectedCategory');
  if (savedCategory) {
    document.getElementById('categoryFilter').value = savedCategory;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  populateCategories();
  restoreLastFilter();
  filterQuotes();

  document
    .getElementById('categoryFilter')
    .addEventListener('change', filterQuotes);
});

const SERVER_URL = 'https://jsonplaceholder.typicode.com/posts';
async function fetchQuotesFromServer() {
  const response = await fetch(SERVER_URL);
  const data = await response.json();

  // Convert server posts into quote format
  return data.slice(0, 5).map(post => ({
    text: post.title,
    category: 'Server'
  }));
}
setInterval(syncWithServer, 10000); // every 10 seconds
function getLocalQuotes() {
  return JSON.parse(localStorage.getItem('quotes')) || [];
}

function saveLocalQuotes(quotes) {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}
function showNotification(message) {
  const note = document.getElementById('notification');
  note.textContent = message;
  note.style.background = '#e6fffa';
  note.style.padding = '10px';

  setTimeout(() => {
    note.textContent = '';
  }, 3000);
}
document.getElementById('syncNow').addEventListener('click', syncWithServer);

});