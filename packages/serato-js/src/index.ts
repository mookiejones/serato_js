import * as fs from 'fs';

const util = require("util");
const os = require("os");
const path = require("path");
import Crate from './Crate'
import Database from './Database';


import { getDefaultPath } from './util';
// Singleton for Serato Folder Path (I doubt it'll change during runtime)
const SERATO_FOLDER = path.join(os.homedir(), "Music", "_Serato_");
const TEMP_FOLDER = "F:\\music\\_Serato_";
const CRATES_FOLDER = path.join(getDefaultPath(), "SubCrates");
const DBFILE = path.join(getDefaultPath(), "database V2");


function listCratesSync(subcratesFolder = CRATES_FOLDER) {
    const crates = fs.readdirSync(subcratesFolder).map(x => {
        const name = path.basename(x, ".crate");
        return new Crate(name, subcratesFolder);
    });
    return crates;
}

async function listCrates(subcratesFolder: any) {
    const files = await util.promisify(fs.readdir)(subcratesFolder);
    const crates = files.map(x => {
        const name = path.basename(x, ".crate");
        return new Crate(name, subcratesFolder);
    });
    return crates;
}
console.log(DBFILE);

const database = new Database(DBFILE);
database.parse();

const crates = listCratesSync(CRATES_FOLDER);

for (let crate of crates) {
    const songs = crate.getSongPathsSync();
    for (let song of songs) {
        console.log('crate');
    }
}

const seratojs = {
    Crate: Crate,
    listCratesSync: listCratesSync,
    listCrates: listCrates
};



export default seratojs;
