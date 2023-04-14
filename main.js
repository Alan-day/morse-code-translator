import { englishToMorse, morseToEnglish } from "./app.js";

let toEnglishButton = document.querySelector(".toEnglish");
let toMorseButton = document.querySelector(".toMorse");
let inputValue = document.querySelector(".input");
let output = document.querySelector(".output");

const handleEnglish = () => {
  output.innerHTML = morseToEnglish(inputValue.value);
};


toEnglishButton.addEventListener("click", handleEnglish);
toMorseButton.addEventListener("click", englishToMorse);
