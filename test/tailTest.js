const assertEqual = require('../assertEqual');
const tail = require('../tail');

const tailResult = tail([5, 6, 7])
assertEqual(tailResult[0], 6);
assertEqual(tailResult[1], 7);

const words = ["Yo Yo", "Lighthouse", "Labs"];

tail(words); // no need to capture the return value since we are not checking it

assertEqual(words.length, 3);