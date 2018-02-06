import {Trie} from "./index"

describe('trie ', () => {

    it('build tree with argument should be the same as withtout if words are identicals', () => {
        const words = ['john', "doe", "johnny"];
        const trie = new Trie(words);
        expect(trie.buildTree()).toEqual(trie.buildTree(words));
        expect(
            JSON.stringify(trie.buildTree())
            ===
            JSON.stringify(trie.buildTree([...words, 'paulo']))
        ).toBeFalsy();
    })
})

describe('contains', () => {

    it('It should contain word from what it is created', () => {
        const words = ['john', "doe", "johnny","johns"];
        const trie = new Trie(words);
        trie.buildTree();
        words.forEach(word => {
            expect(trie.contains(word)).toBeTruthy();
        })
    })
    it('It should return false if it doesnt', () => {
        const words = ['john', "doe", "johnny"];
        const trie = new Trie(words);
        trie.buildTree();
        expect(trie.contains('johnnys')).toBeFalsy();
        expect(trie.contains('johnn')).toBeFalsy();
        expect(trie.contains('joh')).toBeFalsy();
        expect(trie.contains('john"')).toBeFalsy();
        expect(trie.contains('ajohn"')).toBeFalsy();

    })
})

describe('isPrefix', () => {

    it('It should contain word from what it is created', () => {
        const words = ['john', "doe", "johnny","johns"];
        const trie = new Trie(words);
        trie.buildTree();
        words.forEach(word => {
            expect(trie.isPrefix(word)).toBeTruthy();
        })
    })
    it('It should return false if it doesnt', () => {
        const words = ['john', "doe", "johnny"];
        const trie = new Trie(words);
        trie.buildTree();
        expect(trie.isPrefix('johnnys')).toBeFalsy();
        expect(trie.isPrefix('johnn')).toBeFalsy();
        expect(trie.isPrefix('joh')).toBeFalsy();
        expect(trie.isPrefix('john"')).toBeFalsy();
        expect(trie.isPrefix('ajohn"')).toBeFalsy();
    });
    it('It should return true if it doesnt', () => {
       //todo
    })
})