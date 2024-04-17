

// Create an IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

// Select all elements with the class 'hidden' using document.querySelectorAll
const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements2 = document.querySelectorAll('.hidden2');


// Observe each element in the NodeList
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("Hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Set the target date and time (adjust as needed)
const targetDate = new Date("2024-04-20T10:00:00");

function updateTime() {
  // Calculate the time difference between now and the target date
  const now = Date.now();

  const timeDiff = targetDate.getTime() - now;

  if (timeDiff <= 0) {
      // When the countdown reaches zero or below, stop the interval
      clearInterval(interval);
      daysElement.innerHTML = "0";
      hoursElement.innerHTML = "0";
      minutesElement.innerHTML = "0";
      secondsElement.innerHTML = "0";
      return; // Stop executing the function
  }

  // Calculate the time components
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Update the HTML elements with the calculated values
  daysElement.innerHTML = days.toString().padStart(2, '0');
  hoursElement.innerHTML = hours.toString().padStart(2, '0');
  minutesElement.innerHTML = minutes.toString().padStart(2, '0');
  secondsElement.innerHTML = seconds.toString().padStart(2, '0');
}

// Call the updateTime function immediately and set an interval to call it every second
updateTime();
const interval = setInterval(updateTime, 1000);


document.getElementById('mobile-menu-button').addEventListener('click', function() {
  var mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hide');
});

// Function to create a counter for a specific span element
function createCounter(spanElement) {
  // Retrieve the value attribute of the span element and convert it to a number
  let upperLimit = parseInt(spanElement.getAttribute("value"), 10);

  // Initialize a variable for the counter
  let upto = 0;

  // Define a function that updates the counter
  function updated() {
      // Update the inner HTML of the span element with the counter value
      spanElement.innerHTML = "+"+upto;

      // Increment the counter
      upto++;

      // Check if the counter has reached the upper limit
      if (upto > upperLimit) {
          // Clear the interval to stop the counter
          clearInterval(counts);
      }
  }

  // Set an interval to call the updated function every 100 milliseconds
  let counts = setInterval(updated, 50);
}

// Retrieve all the span elements by their common class name (e.g., "counter-span")
let spanElements = document.querySelectorAll('.counter-span');

// Iterate through each span element
spanElements.forEach((spanElement) => {
  // Create a counter for the current span element
  createCounter(spanElement);
});

// AI image 
var im = document.getElementById("img");

var images = ["aii 1.png","aii 2.png","aii 3.png","aii 4.png"];
var index=0;

function changeImage()
{
im.setAttribute("src", images[index]);
index++;
if(index >= images.length)
{
  index=0;
}
}

setInterval(changeImage, 700);



// Select the card container and all join-sections
const cardContainer = document.querySelector('.join-sections');
const cards = cardContainer.querySelectorAll('.join-section');

// Select the "Previous" and "Next" buttons
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Set the current card index to 0
let currentCardIndex = 0;

// Initialize the first card as active
cards[currentCardIndex].classList.add('active');

// Function to display the current card
function displayCurrentCard() {
  // Hide all cards
  cards.forEach((card) => card.classList.remove('active'));
  // Display the current card
  cards[currentCardIndex].classList.add('active');
}

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
  // Increment the current card index
  currentCardIndex = (currentCardIndex + 1) % cards.length;
  // Display the current card
  displayCurrentCard();
});

// Event listener for the "Previous" button
prevButton.addEventListener('click', () => {
  // Decrement the current card index
  currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
  // Display the current card
  displayCurrentCard();
});

// 

// Select the container and all perspectives
const perspectiveContainer = document.querySelector('.perspective');
const perspectives = perspectiveContainer.querySelectorAll('.perspectives');

// Select the "Previous" and "Next" buttons
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// Set the current perspective index to 0
let currentPerspectiveIndex = 0;

// Initialize the first perspective as active
perspectives[currentPerspectiveIndex].classList.add('active');

// Function to display the current perspective
function displayCurrentPerspective() {
  // Hide all perspectives
  perspectives.forEach((perspective) => perspective.classList.remove('active'));
  // Display the current perspective
  perspectives[currentPerspectiveIndex].classList.add('active');
}

// Event listener for the "Next" button
next.addEventListener('click', () => {
  // Increment the current perspective index
  currentPerspectiveIndex = (currentPerspectiveIndex + 1) % perspectives.length;
  // Display the current perspective
  displayCurrentPerspective();
});

// Event listener for the "Previous" button
prev.addEventListener('click', () => {
  // Decrement the current perspective index
  currentPerspectiveIndex = (currentPerspectiveIndex - 1 + perspectives.length) % perspectives.length;
  // Display the current perspective
  displayCurrentPerspective();
});
