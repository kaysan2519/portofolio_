// Contact Form Handler
console.log('Script loaded' );

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const inputs = form.querySelectorAll('.input-contact');
    const alertSuccess = document.querySelector('.alert-success');
    
    // Handle form submit (button click)
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page reload
        handleFormSubmit();
    });
    
    // Handle Enter key press on any input
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault(); // Prevent default enter behavior
                handleFormSubmit();
            }
        });
    });
    
    // Function to handle form submission
    function handleFormSubmit() {
        // Get form values (optional: validate or send to server)
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields!');
            return;
        }
        
        // Show success alert
        showSuccessAlert();
        
        // Clear all form inputs
        form.reset();
        
        // Optional: Log data (you can send to server here)
        console.log('Form submitted:', { name, email, message });
    }
    
    // Show success alert with animation
    function showSuccessAlert() {
        if (alertSuccess) {
            alertSuccess.style.opacity = '1';
            alertSuccess.style.transform = 'translateX(0)';
            
            // Hide after 3 seconds
            setTimeout(() => {
                alertSuccess.style.opacity = '0';
                alertSuccess.style.transform = 'translateX(100px)';
            }, 3000);
        }
    }
});
