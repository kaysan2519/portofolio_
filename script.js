const form = document.querySelector('.contact-form');
const nama = document.querySelector('input[name="Name"]');
const email = document.querySelector('input[name="Email"]');
const textarea = document.querySelector('textarea[name="Message"]');
const button = document.querySelector('.submit-btn');

button.addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah form submit default
  
  // Validasi form (opsional)
 
    form.submit();
    
    // Kosongkan input setelah submit
    setTimeout(() => {
      nama.value = "";
      email.value = "";
      textarea.value = "";
    }, 1000);
 
});

