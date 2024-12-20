
//Select the  "Explore Now" button
document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.querySelector('.explorebutton');
    const foodMenuSection = document.getElementById('food-menu');
    
    exploreButton.addEventListener('click', () => {
        foodMenuSection.scrollIntoView({ behavior: 'smooth' });
    });
});

    

// Select the "Book a Table" button
const bookButton = document.querySelector('.book-button');

// Add a click event listener to the button
bookButton.addEventListener('click', (event) => {
    // Prevent the default action
    event.preventDefault();

    // Scroll to the "Book a Table" section
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start', // Align to the top of the section
    });
});


