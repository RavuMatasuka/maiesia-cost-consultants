// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Debug logs
    console.log('Hamburger element:', hamburger);
    console.log('Nav links element:', navLinks);

    // Toggle menu function
    function toggleMenu() {
        console.log('Toggle menu called');
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    // Add click event to hamburger
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburger clicked');
            toggleMenu();
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navLinks && navLinks.classList.contains('active') && 
            !hamburger.contains(e.target) && 
            !navLinks.contains(e.target)) {
            console.log('Clicking outside');
            toggleMenu();
        }
    });

    // Close menu when clicking links
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            console.log('Link clicked');
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
}); 