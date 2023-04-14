import { englishToMorse } from "./app";
import { morseToEnglish } from "./app";
describe("testing letters", () => {
  it("should return .- when given the string of 'a' ", () => {
    const string = englishToMorse("a");
    expect(string).toBe(".-");
  });

  it("should return .- .-.. .- -. when given the string of 'Alan' ", () => {
    const string = englishToMorse("Alan");
    expect(string).toBe(".- .-.. .- -.");
  });

  it("should return    .- / -... / -.-. / -.. / . / ..-. when given the string of 'a b c d e f' ", () => {
    const string = englishToMorse("a b c d e f");
    expect(string).toBe(" .- / -... / -.-. / -.. / . / ..-. ");
  });

  it("should return    -... -.. -.-.-- when given the string of '! ? @' ", () => {
    const string = englishToMorse("! ? @");
    expect(string).toBe("-.-.-- / ..--.. / .--.-. ");
  });

  it("should return .- -... / -.-. -.. when given the string of 'aB cD' ", () => {
    const string = englishToMorse("aB cD");
    expect(string).toBe(".-/-.../ /-.-./-..");
  });

  it("should return . .... ..-. .... .--. .- --. --- ..-. .... -.. .--. .-. .... --. -.. when given the string of 'ehfhpAgofhDprhgD' ", () => {
    const string = englishToMorse("ehfhpAgofhDprhgD");
    expect(string).toBe(
      "./..../..-./..../.--./.-/--./---/..-./..../-../.--./.-./..../--./-.."
    );
  });

  it("should return .- / .-.. / .- / -.when given the string of 'A L A N' ", () => {
    const string = englishToMorse("A L A N");
    expect(string).toBe(".-/ /.-../ /.-/ /-.");
  });

  it("should return an error when given the string of 'ś' ", () => {
    const string = englishToMorse("ś");
    expect(string).toBe("unidentified character in the input box");
  });

  it("should return an error when given the string of 'śśś' ", () => {
    const string = englishToMorse("śśś");
    expect(string).toBe("unidentified character in the input box");
  });

  it("should return --... / ----. / ---.. when given the iput of '7 8 9' ", () => {
    const string = englishToMorse("7 8 9");
    expect(string).toBe("--... / ----. / ---..");
  });
});

describe("testing morse code", () => {
  it("should return 'a' when given the string of '.-' ", () => {
    const string = morseToEnglish(".-");
    expect(string).toBe("a");
  });

  it("should return 'Alan' when given the string of '.- .-.. .- -.' ", () => {
    const string = morseToEnglish(".-/.-../.- /-.");
    expect(string).toBe("alan");
  });

  it("should return  a b c d e f  when given the string of '.- / -... / -.-. / -.. / . / ..-.' ", () => {
    const string = morseToEnglish(".- / -... / -.-. / -.. / . / ..-.");
    expect(string).toBe("a b c d e f");
  });

  it("should return '!? @' when given the string of  '-.-.-- ..--.. / .--.-.' ", () => {
    const string = morseToEnglish("-.-.-- ..--.. / .--.-.");
    expect(string).toBe("  -... -.. -.-.-- ");
  });

  it("should return 'aB cD' when given the string of '.- -... / -.-. -..' ", () => {
    const string = morseToEnglish(".- -... / -.-. -..");
    expect(string).toBe("aB cD");
  });

  it("should return 'ehfhpAgofhDprhgD' when given the string of '. .... ..-. .... .--. .- --. --- ..-. .... -.. .--. .-. .... --. -..' ", () => {
    const string = morseToEnglish(
      ". .... ..-. .... .--. .- --. --- ..-. .... -.. .--. .-. .... --. -.."
    );
    expect(string).toBe("ehfhpAgofhDprhgD");
  });

  it("should return 'A L A N'  when given the string of .- / .-.. / .- / -. ", () => {
    const string = morseToEnglish(".- / .-.. / .- / -.");
    expect(string).toBe("A L A N");
  });

  it("should return an error when given the string of 'ś' ", () => {
    const string = morseToEnglish("ś");
    expect(string).toBe("unidentified character in the input box");
  });

  it("should return an error when given the string of '_' ", () => {
    const string = morseToEnglish("_");
    expect(string).toBe(
      "unidentified character in the input box. Dots, forward slashes and minus sings only"
    );
  });

  it("should return '7 8 9' when given the iput of '--... / ----. / ---..' ", () => {
    const string = morseToEnglish("7 8 9");
    expect(string).toBe("--... / ----. / ---..");
  });
});
