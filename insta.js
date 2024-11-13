// Get the follow button element
const followBtn = document.getElementById('follow-btn');

// Function to handle the follow button toggle
followBtn.addEventListener('click', function() {
    // Check if the button text is "Follow"
    if (followBtn.textContent === 'Follow') {
        // Change button text to "Following"
        followBtn.textContent = 'Following';
        // Optionally, change the button color to indicate the follow action
        followBtn.style.backgroundColor = '#b2dffc';
    } else {
        // Change button text back to "Follow"
        followBtn.textContent = 'Follow';
        // Change the button color back to original
        followBtn.style.backgroundColor = '#0095f6';
    }
});
