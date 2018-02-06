const { Trie } = require('../build');
const dictionary=require("../dictionaries/words");
const fs=require('fs');
const trie=new Trie(Object.keys(dictionary));
trie.buildTrie();
console.log(trie.contains('ABDIQUAI'))

fs.writeFile("./myfile.json",JSON.stringify(trie.trieObject));