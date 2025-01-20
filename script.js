// Dark Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    document.getElementById('theme-toggle').textContent =
      document.body.classList.contains('light-theme') ? 'Dark Mode' : 'Light Mode';
   });
   
   // Back-to-Top Button
   const backToTop = document.getElementById('back-to-top');
   window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
   });
   backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
   });
   
   // Function to navigate to project details
function navigateToProject(url) {
    window.open(url, '_blank'); // Opens the project details in a new tab
   }

   // Animate progress bars when in view
document.addEventListener("scroll", () => {
    const skillsSection = document.querySelector(".skills-section");
    const progressBars = document.querySelectorAll(".progress");
   
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
   
    if (sectionPosition < screenPosition) {
      progressBars.forEach((progressBar) => {
        const targetWidth = progressBar.getAttribute("data-progress");
        progressBar.style.width = targetWidth;
      });
    }
   });

   // Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
   });

 // Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form'); // Get the form element
   
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form's default behavior (page refresh)
   
        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
   
        // Check if all fields are filled
        if (!name || !email || !message) {
          alert('Please fill in all the fields!');
          return;
        }
   
        // Format the WhatsApp message
        const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Here's my message: ${message}`;
   
        // WhatsApp URL (replace with your WhatsApp number)
        const whatsappURL = `https://wa.me/919440232324?text=${encodeURIComponent(whatsappMessage)}`;
   
        // Open WhatsApp in a new tab
        window.open(whatsappURL, '_blank');
      });
    } else {
      console.error("Form with id 'contact-form' not found."); // Debug message
    }
   });