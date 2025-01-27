// Select necessary elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const submitButton = document.getElementById("btn");
const outputDiv = document.getElementById("output");

// Async function to introduce delay
async function delayMessage(text, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
}

// Event listener for the submit button
submitButton.addEventListener("click", async () => {
  // Get input values
  const text = textInput.value.trim();
  const delay = parseInt(delayInput.value, 10);

  // Validate inputs
  if (!text || isNaN(delay) || delay < 0) {
    outputDiv.textContent = "Please enter valid text and a positive delay.";
    return;
  }

  // Clear and show processing message
  outputDiv.textContent = "Processing...";

  try {
    // Wait for the delay and display the text
    const result = await delayMessage(text, delay);
    outputDiv.textContent = result;
  } catch (error) {
    outputDiv.textContent = "An error occurred.";
  }
});
