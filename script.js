// Simple demo verification logic

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#verify button");
  const input = document.querySelector("#verify input");
  const result = document.querySelector("#result");

  button.addEventListener("click", () => {
    const credentialId = input.value.trim();

    if (credentialId === "") {
      result.style.color = "#ff0099"; // neon pink for error
      result.textContent = "❌ Please enter a Credential ID.";
      return;
    }

    // Fake check: If ID starts with "SPX", it's valid
    if (credentialId.toUpperCase().startsWith("SPX")) {
      result.style.color = "#00ffcc"; // neon green-blue for success
      result.textContent = "✅ Credential Verified!";
    } else {
      result.style.color = "#ff0099"; // neon pink for fail
      result.textContent = "❌ Invalid Credential.";
    }
  });
});
