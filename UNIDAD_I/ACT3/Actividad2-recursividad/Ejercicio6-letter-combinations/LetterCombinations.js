function letterCombinations(digits) {
  if (digits === "") {
    return [];
  }

  const keyboard = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  function generateCombinations(index, currentCombination) {
    if (index === digits.length) {
      combinations.push(currentCombination);
      return;
    }

    const currentDigit = digits[index];
    const letters = keyboard[currentDigit];

    for (const letter of letters) {
      generateCombinations(index + 1, currentCombination + letter);
    }
  }

  const combinations = [];
  generateCombinations(0, '');

  return combinations;
}

export {letterCombinations}