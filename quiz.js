// Function declaration
function checkAnswer() {
  // Step 1: Identify the correct answer
  const correctAnswer = "4";

  // Step 2: Retrieve user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // If no option is selected, show feedback
  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer!";
    return;
  }

  const userAnswer = selectedOption.value;

  // Step 3: Compare the user's answer with the correct answer
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// Step 4: Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
