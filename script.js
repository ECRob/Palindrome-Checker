const palindromeInput = document.getElementById("text-input");
const palindromeSubmitButton = document.getElementById("check-btn");
const palindromeResult = document.getElementById("result");

const palindromeSubmit = input => {
  const userEntry = input;

  if (input === "") {
    alert("Please input a value");
    return;
  }
  
  palindromeResult.replaceChildren();

  const formatted = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let finalResult = `${userEntry} ${formatted === [...formatted].reverse().join("") ? "is" : "is not"} a palindrome!`;

  const h3Result = document.createElement("h3");
  h3Result.innerHTML = finalResult;
  palindromeResult.appendChild(h3Result);
};

palindromeSubmitButton.addEventListener("click", () => {
  palindromeSubmit(palindromeInput.value);
  palindromeInput.value = "";
});

palindromeInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    palindromeSubmit(palindromeInput.value);
    palindromeInput.value = '';
  }
});
