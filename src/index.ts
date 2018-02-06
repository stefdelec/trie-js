export class Trie {
    private _words: string[];
    private _trieObject: any = {};

    constructor(words: string[]) {
        this._words = words;
    }

    public contains(word: string, nestedObject?: any): boolean {
        nestedObject = nestedObject || this._trieObject;
        if (nestedObject.hasOwnProperty(word[0])) {
            return this.contains(word.substr(1), nestedObject[word[0]])
        } else {
            return word.length === 0 && nestedObject.hasOwnProperty('end');
        }
    }

    public isPrefix(word: string, nestedObject?: any):boolean {
        nestedObject = nestedObject || this._trieObject;
        if (nestedObject.hasOwnProperty(word[0])) {
            return this.contains(word.substr(1), nestedObject[word[0]])
        } else {
            console.log("aa",word)
            return word.length === 0;
        }
    }

    public buildTree(words?: string[]): any {
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
                        nestedObj[letter]['end'] = true;
                    }
                    nestedObj = nestedObj[letter];
                })
        })
        return this._trieObject;
    }


}