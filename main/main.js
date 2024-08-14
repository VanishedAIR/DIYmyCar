const containerElement = document.querySelector(".welcome-auto-text-container");

const sentence = "Welcome to DIYmyCar!";

let characterIndex = 0;

function updateText() {
  characterIndex++;
  containerElement.innerHTML = `
  <div class="welcome">${sentence.slice(0, characterIndex)}</div>`;

  if (characterIndex === sentence.length) {
    characterIndex = 0;
  }

  setTimeout(updateText, 300);
}

updateText();
