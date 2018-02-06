export declare class Trie {
    private _words;
    private _trieObject;
    constructor(words: string[]);
    contains(word: string, nestedObject?: any): boolean;
    isPrefix(word: string, nestedObject?: any): boolean;
    buildTree(words?: string[]): any;
}
