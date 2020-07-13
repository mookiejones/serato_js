import {
    parse,
    toSeratoString,
    intToHexbin,
    sanitizeFilename,
    getIndices
} from './util'

import {
    TTYP,
    PFIL, TSNG, TGEN, TBPM, TCMP, TADD, TKEY, UTME, SBAV, BHRT, BMIS, BPLY, BLOP,
    BITU, BOVC, BCRT, BIRO, BWLB, BWLL,
    BUNS, BBGL

} from './Keys'

interface IValue {
    key: string,
    value: string
}
class Song {
    filePath: string;
    contents: string;
    values: IValue[] = [];
    constructor(filePath: string, contents: string) {
        this.filePath = filePath;
        this.contents = contents;
        this.parseContents(this.contents);
    }
    getIndices() {

        const items = [
            "ttyp",
            "uadd",
            "pfil",
            "tsng", "tgen", "tbpm", "tcmp", "tadd", "tkey", "utme", "ulbl", "sbav", "bhrt", 'bmis', 'bply', "blop", "bitu", 'bcrt', 'biro', 'bwlb', 'bwll', 'buns', 'bbgl',

            "utpc" // Might not be right
        ];

        const indices: number[] = [];
        for (let i = 0; i < this.contents.length; i++) {
            let s = this.contents.slice(i, i + 4);
            if (/\0/g.test(s)) {
                continue;
            }
            if (items.includes(s)) {
                indices.push(i);
            }
        }
        return indices;
    }
    parseContents = (contents: string) => {
        const indices: number[] = this.getIndices();
        indices.forEach((value: number, index: number) => {
            const line = contents.substring(value);
            const key = line.substring(0, 4);

            switch (key) {
                case "ttyp":
                case "pfil":
                case "tsng":
                case "tgen":
                case "tbpm":
                case "tcmp":
                case "tadd":
                case "tkey":
                case "ulbl":
                case "uadd":


                case 'bhrt':

                // Needs to be converted
                case 'utme':
                case 'utpc':
                case 'bmis':
                case "bhrt":
                case "bply":
                case "blop":
                case "bitu":
                case 'sbav':
                case 'bcrt':
                case 'biro':
                case 'bwlb':
                case 'bwll':
                case 'buns':
                case 'bbgl':

                    break;

                default:
                    console.log(key);
                    break;
            }
            const start = value + 9; // + 9 to skip the 'key' itself and the bytes for size
            const isLast = index === indices.length - 1;
            const end = isLast ? contents.length : indices[index + 1]; // -8 to remove 'otrk' and size bytes
            let text = contents.slice(start, end).trim();

            try {
                this.values.push({ key, value: text });
            } catch (error) {
                console.log(error);
            }


        })
    }
}

export default Song;