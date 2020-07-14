
import Crate from './Crate'
import Database from './Database';

import { listCrates, listCratesSync } from './listCrates';

import { getDefaultPath } from './util';
// Singleton for Serato Folder Path (I doubt it'll change during runtime)

/*
const FOLDER_PATH = getDefaultPath();
const CRATES_FOLDER = path.join(FOLDER_PATH, "Subcrates");
const DBFILE = path.join(FOLDER_PATH, "database V2");

const database = Database.getDatabase(DBFILE);
database.parse();

const crates = listCratesSync(CRATES_FOLDER);

for (let crate of crates) {
    const songs = crate.getSongPathsSync();
    for (let song of songs) {
        console.log('crate');
    }
}
*/



const seratojs = {
    Crate,
    Database,
    getDefaultPath,
    listCratesSync,
    listCrates
};



export default seratojs;
