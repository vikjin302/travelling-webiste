// JavaScript for search bar functionality

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.search-form');
    const input = form.querySelector('input[type="text"]');
    const links = document.querySelectorAll('.hotel-booking-links a');
    const backButton = document.querySelector('.back-button');
    const noResultMessage = document.querySelector('.no-result-message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      
      const searchTerm = input.value.trim().toLowerCase(); // Get search term and normalize it
      
      // Perform search operation
      searchWebsites(searchTerm);
    });
  
    backButton.addEventListener('click', function() {
      showAllWebsites();
    });
    
    function searchWebsites(searchTerm) {
      let found = false;
      links.forEach(function(link) {
        const name = link.querySelector('.logo-name').textContent.toLowerCase();
        
        if (name.includes(searchTerm)) {
          // If the link matches the search term, show the link and hide others
          link.style.display = 'block';
          found = true;
        } else {
          // Otherwise, hide the link
          link.style.display = 'none';
        }
      });
  
      if (found) {
        // If at least one match found, hide the no-result message
        noResultMessage.style.display = 'none';
      } else {
        // If no match found, display the no-result message
        noResultMessage.style.display = 'block';
      }
  
      // Show the back button
      backButton.style.display = 'inline-block';
    }
  
    function showAllWebsites() {
      links.forEach(function(link) {
        // Show all links
        link.style.display = 'block';
      });
  
      // Hide the back button
      backButton.style.display = 'none';
  
      // Hide the no-result message
      noResultMessage.style.display = 'none';
    }
  });
  
  