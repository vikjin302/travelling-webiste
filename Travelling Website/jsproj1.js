// JavaScript code for search functionality
const searchInput = document.getElementById('searchInput');
const destinations = document.querySelectorAll('.destination');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  
  destinations.forEach(destination => {
    const placeName = destination.querySelector('.place').innerText.toLowerCase();
    if (placeName.includes(searchTerm)) {
      destination.style.display = 'block';
    } else {
      destination.style.display = 'none';
    }
  });
});

// Sample data of recommended places with facts
const recommendedPlaces = [
    { name: 'Taj Mahal', fact: 'Built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal' },
    { name: 'Goa', fact: 'Known for its beautiful beaches, rich history, and vibrant culture' },
    { name: 'Varanasi', fact: 'One of the oldest continuously inhabited cities in the world' },
    // Add more recommended places as needed
  ];
  
  // Function to get a random recommendation
  function getRandomRecommendation() {
    const randomIndex = Math.floor(Math.random() * recommendedPlaces.length);
    return recommendedPlaces[randomIndex];
  }
  
  // Function to populate recommended places with a random recommendation
  function populateRecommendedPlaces() {
    const recommendedList = document.querySelector('.recommended-list');
    
    // Clear previous recommendations
    recommendedList.innerHTML = '';
  
    // Get a random recommendation
    const recommendation = getRandomRecommendation();
  
    // Create and append the recommendation item
    const item = document.createElement('div');
    item.classList.add('recommended-item');
    
    item.innerHTML = `
      <h3>${recommendation.name}</h3>
      <p>${recommendation.fact}</p>
    `;
    
    recommendedList.appendChild(item);
  }
  
  // Call the function to populate recommended places initially
  populateRecommendedPlaces();
  
  // Set interval to change recommendation every 10 seconds (10000 milliseconds)
  setInterval(populateRecommendedPlaces, 10000);

// JavaScript code to control slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');

function showSlides() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  slideIndex++;
  
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  
  slides[slideIndex].classList.add('active');
  
  setTimeout(showSlides, 5000); // Change slide every 5 seconds (5000 milliseconds)
}

showSlides(); // Call the function to start the slideshow
// Static data for travel places (replace with dynamic data from database)
const placesData = [
  { name: 'Jaipur', description: 'Description of Jaipur' },
  { name: 'Agra', description: 'Description of Agra' },
  { name: 'Goa', description: 'Description of Goa' }
];

// Function to search places
function searchPlaces() {
  const searchQuery = document.getElementById('searchBox').value.toLowerCase();
  const placesContainer = document.getElementById('places');
  const noResultsMessage = document.getElementById('noResultsMessage');

  // Clear previous search results
  placesContainer.innerHTML = '';
  
  // Flag to track if any matching places are found
  let found = false;

  // Loop through places data to find matches
  placesData.forEach(place => {
    if (place.name.toLowerCase().includes(searchQuery)) {
      // Create HTML for place card
      const placeCard = document.createElement('div');
      placeCard.classList.add('place-card');
      placeCard.innerHTML = `
        <h2>${place.name}</h2>
        <p>${place.description}</p>
      `;
      placesContainer.appendChild(placeCard);
      
      // Set flag to true since at least one match is found
      found = true;
    }
  });

  // Display no results message if no matching places are found
  if (!found) {
    noResultsMessage.style.display = 'block';
  } else {
    noResultsMessage.style.display = 'none';
  }
}

