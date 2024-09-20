// script.js

document.addEventListener('DOMContentLoaded', function() {
    const arrow = document.querySelector('.arrow');

    arrow.addEventListener('mouseover', function() {
        // Example: Change animation speed on hover
        document.querySelector('.half-circle').style.animation = 'bounce 0.5s infinite';
    });

    arrow.addEventListener('mouseout', function() {
        // Reset animation speed on mouse out
        document.querySelector('.half-circle').style.animation = 'bounce 1s infinite';
    });
});

const counters = document.querySelectorAll('.count');

function startCounting() {
    counters.forEach(counter => {
        // Reset the initial value to 0
        counter.innerText = '0';

        const updateCounter = () => {
            // Get the target number
            const target = +counter.getAttribute('data-target');
            // Get the current number from the element
            const current = +counter.innerText.replace(/\D/g, '');

            // Calculate the increment (smaller increments for larger numbers)
            const increment = target / 200;

            // If the current number is less than the target, increment it
            if (current < target) {
                counter.innerText = `${Math.ceil(current + increment)}${counter.innerText.includes('%') ? '%' : '+'}`;
                setTimeout(updateCounter, 10); // Repeat every 10ms
            } else {
                // Set the final value to ensure it hits the target exactly
                counter.innerText = `${target}${counter.innerText.includes('%') ? '%' : '+'}`;
            }
        };

        updateCounter();
    });
}

// Start the counting and repeat every 5 seconds
startCounting();
setInterval(() => {
    startCounting();
}, 3000);


// Array to store testimonial data
const testimonials = [
    {
        text: "On the other hand, we denounce with righteous indignation and dislike men who are beguiled and demoralized by the charms of pleasure moments.",
        name: "James N. Johnson",
        title: "CEO & Founder",
        image: "author1.png",
        rating: 4.5
    },
    {
        text: "Those who fail to understand the beauty of life may struggle with negative emotions. However, we choose to live with purpose and passion.",
        name: "Sarah K. Parker",
        title: "Marketing Manager",
        image: "author2.png",
        rating: 5
    },
    {
        text: "Success in life is not to be measured by what you accomplish, but by the opposition you have encountered.",
        name: "Michael T. Dean",
        title: "CTO",
        image: "author3.png",
        rating: 4
    }
];

// Track the current testimonial index
let currentTestimonial = 0;

// Function to update testimonial content
function updateTestimonial(index) {
    const testimonial = testimonials[index];
    document.querySelector('.testimonial-right blockquote p').textContent = testimonial.text;
    document.querySelector('.author-image').src = testimonial.image;
    document.querySelector('.author-details h4').textContent = testimonial.name;
    document.querySelector('.author-details p').textContent = testimonial.title;
    
    // Update star rating
    const ratingContainer = document.querySelector('.rating');
    ratingContainer.innerHTML = ''; // Clear previous stars
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        if (i <= Math.floor(testimonial.rating)) {
            star.innerHTML = '&#9733;'; // Full star
        } else if (i - testimonial.rating < 1) {
            star.innerHTML = '&#9733;'; // Half star
        } else {
            star.innerHTML = '&#9734;'; // Empty star
        }
        ratingContainer.appendChild(star);
    }
}

// Event listeners for prev and next buttons
document.querySelector('.prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
    updateTestimonial(currentTestimonial);
});

document.querySelector('.next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
    updateTestimonial(currentTestimonial);
});

// Initialize the first testimonial
updateTestimonial(currentTestimonial);
