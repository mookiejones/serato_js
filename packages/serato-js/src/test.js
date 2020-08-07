const path = require('path');
const fs = require('fs');


const Crate = require('./Crate');
const { listCratesSync } = require('./listCrates');
const { getDefaultPath, sanitizeFilename } = require('./util');

const BASE_FOLDER = path.join(getDefaultPath(), "../")
const TEST_SUBCRATES_FOLDER = path.join(getDefaultPath(), "../TestSubcrates");

const SUBCRATES_PATH = path.join(getDefaultPath(), "Subcrates");
test("basic test", () => {
    const defaultPath = getDefaultPath("");
    console.log(BASE_FOLDER);
    expect(1).toBe(1);
})
beforeEach(() => {
    // Copy Crates
    fs.mkdirSync(TEST_SUBCRATES_FOLDER);


    // get all files
    const files = fs.readdirSync(SUBCRATES_PATH);

    for (let file of files) {
        fs.copyFileSync(
            path.join(SUBCRATES_PATH, file),
            path.join(TEST_SUBCRATES_FOLDER, file)
        );

    }
}
);




afterEach(() => {
    const files = fs.readdirSync(TEST_SUBCRATES_FOLDER);
    for (let filename of files) {
        fs.unlinkSync(path.join(TEST_SUBCRATES_FOLDER, filename));
    }
    fs.rmdirSync(TEST_SUBCRATES_FOLDER);
});

test("list crates in sync and read crate info", () => {
    try {
        const crates = listCratesSync(TEST_SUBCRATES_FOLDER);

        expect(crates.length).toBe(5);

        for (let crate of crates) {
            const songs = crate.getSongs();

            expect(crate.name.length).toBeGreaterThan(0);

        }
        const crate = crates[0];

    } catch (e) {
        console.log(e);
    }

    /* expect(crate.name).toBe("Serato Demo Tracks");
     expect(songs).toEqual([
         "C:\\Users\\bcollazo\\Music\\_Serato_\\Imported\\Serato Demo Tracks\\01 - House Track Serato House Starter Pack.mp3",
         "C:\\Users\\bcollazo\\Music\\_Serato_\\Imported\\Serato Demo Tracks\\02 - House Track Serato House Starter Pack.mp3",
         "C:\\Users\\bcollazo\\Music\\_Serato_\\Imported\\Serato Demo Tracks\\03 - House Track Serato House Starter Pack.mp3",
         "C:\\Users\\bcollazo\\Music\\_Serato_\\Imported\\Serato Demo Tracks\\04 - Hip Hop Track Serato Hip Hop Starter Pack.mp3",
         "C:\\Users\\bcollazo\\Music\\_Serato_\\Imported\\Serato Demo Tracks\\05 - Hip Hop Track Serato Hip Hop Starter Pack.mp3",
         "C:\\Users\\bcollazo\\Music\\_Serato_\\Imported\\Serato Demo Tracks\\06 - Hip Hop Track Serato Hip Hop Starter Pack.mp3"
     ]);*/
});
/*
test("create new crate and list", () => {
    const newCrate = new Crate(
        "ProgramaticallyCreatedCrate",
        TEST_SUBCRATES_FOLDER
    );
    newCrate.addSong("Users/bcollazo/Music/song.mp3");
    newCrate.addSong("C:\\Users\\bcollazo\\Music\\second_song.mp3");
    newCrate.saveSync();

    const crates = seratojs.listCratesSync(TEST_SUBCRATES_FOLDER);
    expect(crates.length).toBe(2);

    // Cleanup
    fs.unlinkSync(
        path.join(TEST_SUBCRATES_FOLDER, "ProgramaticallyCreatedCrate.crate")
    );
});

test("async list files", async () => {
    const crates = await seratojs.listCrates(TEST_SUBCRATES_FOLDER);
    expect(crates.length).toBe(1);

    const crate = crates[0];
    const songs = await crate.getSongPaths();
    expect(crate.name).toBe("Serato Demo Tracks");
    expect(songs).toEqual([
        "C:\\Users\\bcollazo\\Music\\_Serato_\\Imported\\Serato Demo Tracks\\01 - House Track Serato House Starter Pack.mp3",
        "C:\\Users\\bcollazo\\Music\\_Serato_\\Imported\\Serato Demo Tracks\\02 - House Track Serato House Starter Pack.mp3",
        "C:\\Users\\bcollazo\\Music\\_Serato_\\Imported\\Serato Demo Tracks\\03 - House Track Serato House Starter Pack.mp3",
        "C:\\Users\\bcollazo\\Music\\_Serato_\\Imported\\Serato Demo Tracks\\04 - Hip Hop Track Serato Hip Hop Starter Pack.mp3",
        "C:\\Users\\bcollazo\\Music\\_Serato_\\Imported\\Serato Demo Tracks\\05 - Hip Hop Track Serato Hip Hop Starter Pack.mp3",
        "C:\\Users\\bcollazo\\Music\\_Serato_\\Imported\\Serato Demo Tracks\\06 - Hip Hop Track Serato Hip Hop Starter Pack.mp3"
    ]);
});

test("async create new crate and list", async () => {
    const newCrate = new seratojs.Crate(
        "ProgramaticallyCreatedCrate",
        TEST_SUBCRATES_FOLDER
    );
    newCrate.addSong("Users/bcollazo/Music/song.mp3");
    newCrate.addSong("C:\\Users\\bcollazo\\Music\\second_song.mp3");
    await newCrate.save();

    const crates = await seratojs.listCrates(TEST_SUBCRATES_FOLDER);
    expect(crates.length).toBe(2);

    // Cleanup
    fs.unlinkSync(
        path.join(TEST_SUBCRATES_FOLDER, "ProgramaticallyCreatedCrate.crate")
    );
});

test("weird names dont break crate creation", async () => {
    const newCrate = new Crate(
        "2000-2010 HipHáp / Reggaeton!?",
        TEST_SUBCRATES_FOLDER
    );
    await newCrate.save();
});

test("util filename sanitazion", () => {
    expect(sanitizeFilename("hello/world")).toBe("hello-world");
    expect(sanitizeFilename("hello/wo rl/d")).toBe("hello-wo rl-d");
    expect(sanitizeFilename("hello-world")).toBe("hello-world");
    expect(sanitizeFilename("foo bar baz")).toBe("foo bar baz");
    expect(sanitizeFilename("Foo BAR bAz")).toBe("Foo BAR bAz");
    expect(sanitizeFilename("Foo BAR.bAz")).toBe("Foo BAR-bAz");
    expect(sanitizeFilename("Foo_BAR.bAz")).toBe("Foo_BAR-bAz");
    expect(sanitizeFilename("Foo_BAR.bAz!")).toBe("Foo_BAR-bAz-");
    expect(sanitizeFilename("!Viva Latino!")).toBe("-Viva Latino-");
    expect(sanitizeFilename("2000-2010 HipHop / Reggae")).toBe(
        "2000-2010 HipHop - Reggae"
    );
    expect(sanitizeFilename("Activáera!?")).toBe("Activ-era--");
    expect(sanitizeFilename("2000-2010 HipHáp / Reggaeton!?")).toBe(
        "2000-2010 HipH-p - Reggaeton--"
    );
});
*/