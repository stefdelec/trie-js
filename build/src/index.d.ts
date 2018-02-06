export declare class Trie {
    private _words;
    private _trieObject;
    constructor(words: string[]);
    readonly trieObject: any;
    contains(word: string, nestedObject?: any): boolean;
    isPrefix(word: string, nestedObject?: any): boolean;
    buildTrie(words?: string[]): any;
}
