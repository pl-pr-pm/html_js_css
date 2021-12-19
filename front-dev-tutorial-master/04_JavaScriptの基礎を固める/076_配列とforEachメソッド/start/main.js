const arry = [1,2,3,4,5];

arry.forEach((i) => console.log(i));

arry.forEach((val) => console.log(val * val));

arry.reduce( (accu, curr) => {
  console.log(accu, curr)

}, 10);

const str = "animation";
const strArray = str.split('');

console.log(strArray);

const result = strArray.reduce((acc, crr) => {
  return acc + "<" + crr + ">";
}, "");

console.log(result);