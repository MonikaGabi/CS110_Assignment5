const utils = require('./utils.js');
const prompt = require('readline-sync');

utils.print(utils.matProduct
(
[[1,2,3],[4,5,6]], 
[[7,8,9],[10,11,12]]
));

utils.print(utils.matSum
(
[[1,2,3],[4,5,6]], 
[[7,8,9],[10,11,12]]
));

console.log(utils.matRowSum
(
    [[1,2,3],[4,5,6],[7,8,9]]
));

const sentence_1 = prompt.question("Your sentence\n");
console.log(`The word count is: `, utils.count(sentence_1));

const sentence_2 = " The string ! ! ! , ";
console.log(`The sentence was \"${sentence_2}\"`);
console.log(`The trimmed sentence is\"${utils.trim(sentence_2)}\"`);