// Smooth scrolling for navigation links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        window.scrollTo({
            top: section.offsetTop - 50, // Adjusted offset to accommodate fixed header
            behavior: 'smooth'
        });
    });
});

// Form submission handling (example)
// Replace with your actual form submission logic
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Here you can add your own logic for form submission,
    // like sending data to a server using fetch or XMLHttpRequest,
    // or displaying a thank you message.
    
    // For demonstration, we'll just log the values to console
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Reset form fields
    this.reset();

    // Show a thank you message or redirect to a thank you page
    alert('Thank you for your message!');
});
