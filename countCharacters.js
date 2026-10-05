function countCharacters(text) {
  const frequency = {};

  for (const character of text.toLowerCase()) {
    if (character === " ") continue;

    frequency[character] = (frequency[character] || 0) + 1;
  }

  return frequency;
}

console.log(countCharacters("javascript"));
