module.exports = function check(str, bracketsConfig) {
  const brackets = str.split('');
  const stack = [];
  let bracketsObj = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    const key = bracketsConfig[i][1];
    if (!bracketsObj[key]) {
      bracketsObj[key] = bracketsConfig[i][0];
    }
  }

  for (let i = 0; i < brackets.length; i++) {
    if (bracketsObj[brackets[i]] === stack[stack.length - 1] && stack.length) {
      stack.pop()
    } else {
      stack.push(brackets[i]);
    }
  }

  return stack.length === 0;
}