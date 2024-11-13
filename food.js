// Get references to the HTML elements
const foodSelect = document.getElementById('food-select');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');
const foodImage = document.getElementById('food-image');

// Object to map food names to image URLs
const foodImages = {
    Pizza: 'download.jpeg',
    Burger: 'download (1).jpeg',
    Pasta: 'download (2).jpeg',
    Salad: 'download (3).jpeg'
};

// Function to handle the submission
submitBtn.addEventListener('click', function() {
    // Get the selected food from the dropdown
    const selectedFood = foodSelect.value;

    // Check if a food item is selected
    if (selectedFood) {
        // Display the selected food name
        result.textContent = `You selected: ${selectedFood}`;
        
        // Show the corresponding food image
        foodImage.src = foodImages[selectedFood];
        foodImage.style.display = 'block';  // Make the image visible
    } else {
        // If no food is selected, prompt the user to choose one
        result.textContent = 'Please select a food item.';
        foodImage.style.display = 'none';  // Hide the image if no food is selected
    }
});

// Optional: Disable the submit button when no option is selected
foodSelect.addEventListener('change', function() {
    submitBtn.disabled = !foodSelect.value;
});
