const vowelCount = require("./vowel-count");

describe("Count Every Vowel", () => {
  test("Count 'aeiou'", () => {
    const vowels = vowelCount('aeiou');

    expect(vowels).toBe(5);
  });

  test("Count 'The cat jumped over the tree'", () => {
    const vowels = vowelCount('The cat jumped over the tree');

    expect(vowels).toBe(9);
  });

  test("Count 'The quick brown fox jumped over the moon and laughed at the sky'", () => {
    const vowels = vowelCount('The quick brown fox jumped over the moon and laughed at the sky');

    expect(vowels).toBe(18);
  });
});