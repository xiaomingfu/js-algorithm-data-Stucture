// two positive int, if same digits exist return true, else return fasle
function sameFrequency(a, b) {
  // int -> str
  let str1 = a.toString();
  let str2 = b.toString();
  // check two strings' length
  if (str1.length !== str2.length) {
    return false;
  }
  //   create two objects to count the frequency of each char in two strings
  let count1 = {};
  let count2 = {};
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    count1[char] = (count1[char] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    count2[char] = (count2[char] || 0) + 1;
  }
  for (let key in count1) {
    if (!count2[key]) {
      return false;
    }
    if (count2[key] !== count1[key]) {
      return false;
    }
  }
  return true;
}
