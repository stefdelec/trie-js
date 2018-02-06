/**
 * Enum to try to reduce size of output file
 */
enum key {
    end = "*",
    forTrue='#'
}

export class Trie {
    private _words: string[];
    private _trieObject: any = {};

    /**
     * Contructor. Pass a dictionary of words.
     * @param {string[]} words
     */
    constructor(words: string[]) {
        this._words = words;
    }

    /**
     * The trie object
     * @returns {any}
     */
    get trieObject() {
        return this._trieObject;
    }

    /**
     * Is it a full word ?
     * @param {string} word
     * @param nestedObject
     * @returns {boolean}
     */
    public contains(word: string, nestedObject?: any): boolean {
        nestedObject = nestedObject || this._trieObject;
        if (nestedObject.hasOwnProperty(word[0])) {
            return this.contains(word.substr(1), nestedObject[word[0]])
        } else {
            return word.length === 0 && nestedObject.hasOwnProperty(key.end);
        }
    }

    /**
     * Has prefix
     * @param {string} word
     * @param nestedObject
     * @returns {boolean}
     */
    public isPrefix(word: string, nestedObject?: any): boolean {
        nestedObject = nestedObject || this._trieObject;
        if (nestedObject.hasOwnProperty(word[0])) {
            return this.contains(word.substr(1), nestedObject[word[0]])
        } else {
            return word.length === 0;
        }
    }

    /**
     * Build your trie
     * @param {string[]} words - it will override words pass in constructor
     * @returns {any}
     */
    public buildTrie(words?: string[]): any {
        this._words = words || this._words;

        this._words.forEach(word => {
            let nestedObj = this._trieObject;
            word
                .split('')
                .forEach((letter, index, arr) => {
                    if (!nestedObj.hasOwnProperty(letter)) {
                        nestedObj[letter] = {};
                    }

                    if (index === arr.length - 1) {
                        nestedObj[letter][key.end] = '';
                    }
                    nestedObj = nestedObj[letter];
                })
        })
        return this._trieObject;
    }


}