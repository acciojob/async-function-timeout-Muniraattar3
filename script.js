//your JS code here. If required.
// Select the necessary elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const submitButton = document.getElementById("btn");
const outputDiv = document.getElementById("output");

// Async function to handle the delay
async function displayMessageWithDelay(text, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
}

// Event listener for the submit button
submitButton.addEventListener("click", async () => {
  const text = textInput.value; // Get the text value from input
  const delay = parseInt(delayInput.value, 10); // Get the delay value from input

  // Input validation
  if (!text || isNaN(delay) || delay < 0) {
    outputDiv.textContent = "Please enter valid text and a positive delay.";
    return;
  }

  // Display "Processing..." while waiting
  outputDiv.textContent = "Processing...";

  // Wait for the delay and display the message
  try {
    const message = await displayMessageWithDelay(text, delay);
    outputDiv.textContent = message; // Display the user-provided text
  } catch (error) {
    outputDiv.textContent = "An error occurred.";
  }
});
