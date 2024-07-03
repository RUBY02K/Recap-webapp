// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the continue button element
    var continueButton = document.getElementById('btn');

    // Get the thanks container element
    var thanksContainer = document.getElementById('thanks');

    // Get the signup container element
    var signupContainer = document.getElementById('signup');

    // Add a click event listener to the continue button
    continueButton.addEventListener('click', function() {
        // Show the thanks container
        thanksContainer.style.display = 'block';
        // Hide the signup container
        signupContainer.style.display = 'none';
    });
});
