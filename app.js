let toEnglishButton = document.querySelector(".toEnglish");
let toMorseButton = document.querySelector(".toMorse");
let inputValue = document.querySelector(".input");
let output = document.querySelector(".output");

const englishToMorse = (string) => {
  let message = "unidentified character in the input box";
  array = inputValue.value.split("") || string.split("");
  newArray = [];

  let alphabet = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    " ": " ",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    "!": "-.-.--",
    "?": " ..--..",
    "@": ".--.-.",
  };

  for (let i = 0; i < array.length; i++) {
    for (const key in alphabet) {
      if (alphabet.hasOwnProperty(`${array[i]}`) == false) {
        output.innerHTML = message;
      }
      if (array[i] == key) {
        newArray.push(alphabet[key]);
      }
    }
  }

  return (output.innerHTML = newArray.join("/").toString(""));
};

const morseToEnglish = () => {
  let message = "unidentified character in the input box";
  array = inputValue.value.split("/");
  newArray = [];

  let alphabet = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    "-.-.--": "!",
    "-....-": "-",
    "-..-.": "/",
    ".--.-.": "@",
    "-.--.": "(",
    "-.--.-": ")",
  };

  for (let i = 0; i < array.length; i++) {
    for (const key in alphabet) {
      if (array[i] == key) {
        newArray.push(alphabet[key]);
      }
    }
  }

  output.innerHTML = newArray.join("").toString("");
  return newArray.join("/").toString("");
};

toEnglishButton.addEventListener("click", morseToEnglish);
toMorseButton.addEventListener("click", englishToMorse);
