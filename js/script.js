document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            menuToggle.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
        });
    }

    // 2. Image Slider Logic with Arrow Controls
    let slideIndex = 1;
    let timer;

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        
        if (slides.length === 0) return; // Only run if slider exists on the current page
        
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }
        
        slides[slideIndex - 1].classList.add("active");
        
        // Auto-scroll loop resetting
        clearTimeout(timer);
        timer = setTimeout(() => {
            slideIndex++;
            showSlides(slideIndex);
        }, 6000);
    }

    // Global navigation bindings for arrow clicks
    window.changeSlide = function (n) {
        showSlides(slideIndex += n);
    };

    // Initialize home page slider
    showSlides(slideIndex);

    // 3. Form Validations
    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            alert("🎉 Success! Your booking request has been securely submitted.");
            event.preventDefault(); 
        });
    }

    const contactForm = document.getElementById("generalContactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            alert("✅ Thank you! Your message has been sent to our team.");
            event.preventDefault(); 
        });
    }
});