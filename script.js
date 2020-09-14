let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
let currentQuote = '', currentAuthor = '';
let quotes = [
  {
    quote: "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.",
    author: "Frank Herbert"
  },
  {
    quote: "Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.",
    author: "Roy T. Bennett"
  },
  {
    quote: "The truth is, unless you let go, unless you forgive yourself, unless you forgive the situation, unless you realize that the situation is over, you cannot move forward.",
    author: "Steve Maraboli"
  },
  {
    quote: "After sleeping through a hundred million centuries we have finally opened our eyes on a sumptuous planet, sparkling with color, bountiful with life. Within decades we must close our eyes again. Isn’t it a noble, an enlightened way of spending our brief time in the sun, to work at understanding the universe and how we have come to wake up in it? This is how I answer when I am asked—as I am surprisingly often—why I bother to get up in the mornings.",
    author: "Richard Dawkins"
  },
  {
    quote: "ქართველები რომ ერთი შეხედვით პირწავარდნილი ნაციონალისტები ვართ, ეს მცდარი დასკვნაა, რომელიც ცრუ წინამძღვრებიდან გამომდინარეობს. ნაციონალისტობამდე ჯერ ბევრი გვიკლია. ნაციონალისტები კი არ ვართ, უბრალოდ დედის ძუძუს ვერ მოვშორებივართ, და თუმც გარეგნულად ეს მართლა ჩამოჰგავს ნაციონალიზმს, სინამდვილეში ჩვილის უსუსურობაა - პიროვნული დამოუკიდებლობის პანიკური შიში და განვითარების ისეთი დონე, როდესაც ცნობიერება დანაწევრებულია და ადამიანებს, რომლებიც საკუთარ თავს მხოლოდ ერთმანეთის მეშვეობით შეიგრძნობენ, საერთო მამა უნდათ.",
    author: "Jemal Karchkhadze"
  }
]

let previousNumber = -1;
function handler(){
  //for quotes array, every time get the quote that wasnt chosen previous time
  let randomNumber = Math.floor(Math.random() * quotes.length);
  while (randomNumber === previousNumber){
    randomNumber = Math.floor(Math.random() * quotes.length);
  }
  //for colors array, every time get color but it maybe was the color that was chosen last time
  let randomColorNumber = Math.floor(Math.random() * colors.length);

  
  $(".quote-text").animate(
    { opacity: 0 },
    500,
    function() {
      $(this).animate({ opacity: 1}, 500);
      $('#text').text(quotes[randomNumber].quote);
    }
  );
   $(".quote-author").animate(
    { opacity: 0 },
    500,
    function() {
      $(this).animate({ opacity: 1}, 500);
      $('#author').text(quotes[randomNumber].author);
    }
  );
  
  $("html body").animate(
    {
      backgroundColor: colors[randomColorNumber],
      color: colors[randomColorNumber]
    },
    1000
  );
  $(".button").animate(
    {
      backgroundColor: colors[randomColorNumber]
    },
    1000
  );
   // $("#text").text(quotes[randomNumber].quote);
  // $("#author").text(quotes[randomNumber].author);
  previousNumber = randomNumber;
}


$(document).ready(handler);
$(document).on('click', '#new-quote', handler);