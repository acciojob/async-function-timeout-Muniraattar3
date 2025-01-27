// Function to simulate a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle form submission
async function handleSubmit() {
  // Get the user input values
  const text = document.getElementById('text').value;
  const delayTime = parseInt(document.getElementById('delay').value, 10);

  // Ensure delay is a valid number
  if (isNaN(delayTime)) {
    alert('Please enter a valid delay time.');
    return;
  }

  // Wait for the specified delay before updating the output
  await delay(delayTime);

  // Display the user-provided text in the output div
  document.getElementById('output').textContent = text;
}

// Event listener for the button click
document.getElementById('btn').addEventListener('click', handleSubmit);
