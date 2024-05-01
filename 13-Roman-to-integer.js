var romanToInt = function(s) {
  let result = 0;
  let romans = new Map();
  romans.set('I', 1);
  romans.set('V', 5);
  romans.set('X', 10);
  romans.set('L', 50);
  romans.set('C', 100);
  romans.set('D', 500);
  romans.set('M', 1000);

  for (let i = 0; i < s.length; i++) {
    let current = romans.get(s[i]);
    let next = i < s.length - 1? romans.get(s[i + 1]) : 0;
    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
};
