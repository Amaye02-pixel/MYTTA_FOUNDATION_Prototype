// script.js for MYTTA Foundation Full Website

// Smooth scroll for navigation links and CTA buttons
const navLinks = document.querySelectorAll('.nav a, .cta-btn, .primary-btn, .secondary-btn');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Simple testimonial carousel
const testimonials = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.style.display = i === index ? 'block' : 'none';
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

if (testimonials.length > 0) {
    showTestimonial(currentTestimonial);
    setInterval(nextTestimonial, 5000); // Change every 5 seconds
}

// Page-specific JS hooks (future-proof for multiple pages)
if (document.body.classList.contains('home-page')) {
    // Home page specific JS here
}

if (document.body.classList.contains('case-tracker-page')) {
    // Case Tracker page specific JS here
}

if (document.body.classList.contains('articles-page')) {
    // Articles page specific JS here
}

// Hamburger menu toggle
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


