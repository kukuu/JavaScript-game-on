import fs from 'fs';

export const readWordList = () => {
  try {
    const wordlistContent = fs.readFileSync('./wordlist.txt', 'utf8');
    const words = wordlistContent.split('\n');
    return words;
  } catch (error) {
    console.error('Error reading wordlist:', error);
    return [];
  }
};
