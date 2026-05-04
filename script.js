/**
 * Interactivity for Responsive Landing Page
 * Handles the navigation bar scroll effect and mobile menu toggle (if needed).
 */

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    
    // Configurable threshold for when the nav changes style (in pixels)
    const scrollThreshold = 50;

    /**
     * Function to handle scroll event and toggle classes
     */
    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check in case the user refreshes midway down the page
    handleScroll();

    // Smooth scrolling for anchor links to improve user experience
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for fixed header height
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
