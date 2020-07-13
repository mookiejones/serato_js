const path = require("path");
import { PTRK } from './Keys'
const INVALID_CHARACTERS_REGEX = /[^A-Za-z0-9_ ]/gi;

export const getIndices = (contents: string, search: string) => {
    const indices: any = [];

    for (let i = 0; i < contents.length; i++) {
        if (contents.slice(i, i + 4) === search) {
            indices.push(i);
        }
    }
    return indices;

}
export const parse = function (contents: string) {
    // Find all 'ptrk' ocurrances
    const indices = getIndices(contents, PTRK);



    // Content in between these indices are the songs
    const songs: any = [];
    indices.forEach((value: any, index: number) => {
        const start = value + 9; // + 9 to skip the 'ptrk' itself and the bytes for size
        const isLast = index === indices.length - 1;
        const end = isLast ? contents.length : indices[index + 1] - 8; // -8 to remove 'otrk' and size bytes

        let filepath = contents.slice(start, end);
        filepath = filepath.replace(/\0/g, ""); // remove null-termination bytes
        songs.push(path.resolve("/", filepath));
    });
    return songs;
};

export const toSeratoString = function (string: any) {
    return "\0" + string.split("").join("\0");
};

export const intToHexbin = function (number: any) {
    const hex = number.toString(16).padStart(8, "0");
    let ret = "";
    for (let idx of [0, 2, 4, 6]) {
        let bytestr = hex.slice(idx, idx + 2);
        ret += String.fromCodePoint(parseInt(bytestr, 16));
    }
    return ret;
};

export const sanitizeFilename = function (filename: any) {
    return filename.replace(INVALID_CHARACTERS_REGEX, "-");
};
