document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const header = document.querySelector('header');

    mobileMenuToggle.addEventListener('click', () => {
        header.classList.toggle('mobile-menu-open');
        
        // Animate hamburger menu icon
        mobileMenuToggle.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = document.querySelectorAll('.nav-menu ul li a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('mobile-menu-open');
            mobileMenuToggle.classList.remove('open');
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            if (name && email && message) {
                // In a real-world scenario, you would send this data to a backend
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    // Newsletter Subscription
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(email)) {
                // In a real-world scenario, you would send this to a backend service
                alert(`Thank you for subscribing with ${email}! You'll receive our latest updates soon.`);
                emailInput.value = ''; // Clear the input
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});
