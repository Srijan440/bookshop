// login-selection.js

document.addEventListener('DOMContentLoaded', () => {
    // Select all login buttons
    const customerBtn = document.querySelector('.customer-card .login-btn');
    const clerkBtn = document.querySelector('.clerk-card .login-btn');
    const ownerBtn = document.querySelector('.owner-card .login-btn');
    
    // Add event listeners for redirection
    customerBtn.addEventListener('click', () => {
        window.location.href = 'Customer_Login.html'; // URL to Customer login page
    });

    clerkBtn.addEventListener('click', () => {
        window.location.href = 'Clerk_Login.html'; // URL to Clerk login page
    });

    ownerBtn.addEventListener('click', () => {
        window.location.href = 'Owner_Login.html'; // URL to Owner login page
    });
});
