import fs from 'fs';
import path from 'path';
import Song from './Song';

const DIRECTORY: string = "C:\\programming\\serato_js\\_Serato_";

let filename = path.join(DIRECTORY, "database V2");

let content = fs.readFileSync(filename, "binary");


let entries = content.split('otrk');

let songs: Song[] = [];

// Builds a SongModel from each entry in the database
for (let i = 1; i < entries.length; i++) {

    let song = Song.create(entries[i]);
    songs.push(song);
}


// Find Songs with urls in them.

for (let song of songs) {



    if (/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i.test(song.Comment)) {
        debugger;
    } else {
        if (song.Comment.length > 0)

            console.log(song.Genre)
    }
}