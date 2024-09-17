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
