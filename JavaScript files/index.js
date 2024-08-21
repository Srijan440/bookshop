// login-selection.js

document.addEventListener('DOMContentLoaded', () => {
    // Select all login buttons
    const customerBtn = document.querySelector('.customer-card .login-btn');
    const clerkBtn = document.querySelector('.clerk-card .login-btn');
    const ownerBtn = document.querySelector('.owner-card .login-btn');
    
    // Add event listeners for redirection
    customerBtn.addEventListener('click', () => {
        window.location.href = 'CustomerAuthentication.html'; // URL to Customer login page
    });

    clerkBtn.addEventListener('click', () => {
        window.location.href = 'ClerkAuthentication.html'; // URL to Clerk login page
    });

    ownerBtn.addEventListener('click', () => {
        window.location.href = 'OwnerAuthentication.html'; // URL to Owner login page
    });
});
