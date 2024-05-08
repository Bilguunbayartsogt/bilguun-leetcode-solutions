var reversePrefix = function(word, ch) {
 let i = word.indexOf(ch);
 if (i > -1) {
  return word.slice(0, i+1)
             .split('')
             .reverse()
             .join('') + word.slice(i+1);
 }
 return word;
};
