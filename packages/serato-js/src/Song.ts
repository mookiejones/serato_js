


const TYPE_FIELD = "ttyp";
const PATH_FIELD = "pfil";
const SONG_FIELD = "tsng";
const ARTIST_FIELD = "tart";
const ALBUM_FIELD = "talb";
const GENRE_FIELD = "tgen";
const LENGTH_FIELD = "tlen";
const SIZE_FIELD = "tsiz";
const BITRATE_FIELD = "tbit";
const SAMPLE_RATE_FIELD = "tsmp";
const BPM_FIELD = "tbpm";
const COMMENT_FIELD = "tcom";
const GROUP_FIELD = "tgrp";
const tlbl = "tlbl";
const COMPOSER_FIELD = "tcmp";
const YEAR_FIELD = "ttyr";
const tadd = "tadd"; //Date Added?
const KEY_FIELD = "tkey";
const uadd = "uadd"; //Date Added?
const utkn = "utkn"; //Token?
const ulbl = "ulbl"; //Label?
const utme = "utme"; //Track Time?
const udsc = "udsc";
const sbav = "sbav"; //...Audio Volume?
const bhrt = "bhrt";
const MISSING_FIELD = "bmis";
const PLAYED_FIELD = "bply";
const blop = "blop";
const bitu = "bitu";
const bovc = "bovc";
const bcrt = "bcrt"; //Corrupted?
const biro = "biro";
const bwlb = "bwlb"; //White Label?
const bwll = "bwll";
const buns = "buns";
const bbgl = "bbgl";
const bkrk = "bkrk";


const labels = [TYPE_FIELD,
    PATH_FIELD,
    SONG_FIELD,
    ARTIST_FIELD,
    ALBUM_FIELD,
    GENRE_FIELD,
    LENGTH_FIELD,
    SIZE_FIELD,
    BITRATE_FIELD,
    SAMPLE_RATE_FIELD,
    BPM_FIELD,
    COMMENT_FIELD,
    GROUP_FIELD,
    tlbl,
    COMPOSER_FIELD,
    YEAR_FIELD,
    tadd,
    KEY_FIELD,
    uadd,
    utkn,
    ulbl,
    utme,
    udsc,
    sbav,
    bhrt,
    MISSING_FIELD,
    PLAYED_FIELD,
    blop,
    bitu,
    bovc,
    bcrt,
    biro,
    bwlb,
    bwll,
    buns,
    bbgl,
    bkrk];




class Song {




    //PUBLIC PROPERTIES
    /// <summary>
    /// The title of the song
    /// </summary>
    Title: string = "";


    /// <summary>
    /// The artist who performs the song
    /// </summary>
    Artist: string = "";


    /// <summary>
    /// The album the song appears on
    /// </summary>
    Album: string = "";

    /// <summary>
    /// The genre of the song
    /// </summary>
    Genre: string = "";

    /// <summary>
    /// The length of the song
    /// </summary>
    Length: string = "";

    /// <summary>
    /// The size of the song
    /// </summary>
    Size: string = "";

    /// <summary>
    /// The file type of the song
    /// </summary>
    Type: string = "";

    /// <summary>
    /// The string representation of the path to the song
    /// </summary>
    PathString: string = "";

    /// <summary>
    /// The bitrate of the song
    /// </summary>
    Bitrate: string = "";

    /// <summary>
    /// The sample rate of the song
    /// </summary>
    SampleRate: string = "";

    /// <summary>
    /// The beats per minute of the song
    /// </summary>
    Bpm: string = "";

    /// <summary>
    /// The contents of the comment field
    /// </summary>
    Comment: string = "";

    /// <summary>
    /// The contents of the group field
    /// </summary>
    Group: string = "";

    /// <summary>
    /// The composer of the song
    /// </summary>
    Composer: string = "";

    /// <summary>
    /// The year that the song was released
    /// </summary>
    Year: string = "";

    /// <summary>
    /// The key the song is in
    /// </summary>
    Key: string = "";

    /// <summary>
    /// Whether or not the song has been marked as missing
    /// </summary>
    IsMissing: boolean;


    /// <summary>
    /// Whether or not the song has been marked as played
    /// </summary>
    IsPlayed: boolean;




    static create(dbString: string): Song {


        let toRet = new Song();

        for (let farthestReached = 0; farthestReached < dbString.length;) {
            let startOfString = -1;
            let endOfString = -1;

            //Gets the start index
            for (let l of labels) {
                startOfString = dbString.indexOf(l, farthestReached);

                if (startOfString >= 0) {
                    farthestReached = startOfString + l.length;
                    break;
                }
            }

            //If a field was not found, there are no more fields
            if (startOfString == -1)
                break;

            //Gets the end index
            for (let l of labels) {

                // Find the minimum
                let closest = labels
                    .filter(label => label !== l)
                    .map(label => dbString.indexOf(label, farthestReached))
                    .filter(o => o > -1)
                    .sort();


                closest.sort();
                endOfString = closest.length > 0
                    ? Math.min(...closest)
                    : dbString.indexOf(l, farthestReached);

                if (startOfString >= 0)
                    break;
            }

            //If no next field was found, this is the last field
            if (endOfString == -1)
                endOfString = dbString.length;

            //Updates the farthest reached
            farthestReached = endOfString;

            //Isolates the chunk of string to process and cuts out the field and value
            let fieldValueString = dbString.substring(startOfString, endOfString);
            let fieldLabel = fieldValueString.substring(0, 4);
            let rawString = fieldValueString.substring(fieldLabel.length);

            //Performs different actions based off the type of field
            switch (fieldLabel[0]) {
                case 'p':
                case 't':
                    let stringValue = "";
                    // Get Index of first non binary letter
                    for (let i = 0; i < rawString.length; i++) {
                        let code = rawString.charCodeAt(i);
                        if (code <= 33) {
                            continue;
                        }
                        stringValue = rawString.substr(i);
                        break;
                    }


                    toRet = Song.assignStringField(toRet, fieldLabel, stringValue);
                    break;
            }
        }




        return toRet;
    }




    private static assignStringField(s: Song, f: string, v: string): Song {
        switch (f) {
            case TYPE_FIELD:
                s.Type = v;
                break;
            case PATH_FIELD:
                s.PathString = v;
                break;
            case SONG_FIELD:
                s.Title = v;
                break;
            case ARTIST_FIELD:
                s.Artist = v;
                break;
            case ALBUM_FIELD:
                s.Album = v;
                break;
            case GENRE_FIELD:
                s.Genre = v;
                break;
            case LENGTH_FIELD:
                s.Length = v;
                break;
            case SIZE_FIELD:
                s.Size = v;
                break;
            case BITRATE_FIELD:
                s.Bitrate = v;
                break;
            case SAMPLE_RATE_FIELD:
                s.SampleRate = v;
                break;
            case BPM_FIELD:
                s.Bpm = v;
                break;
            case COMMENT_FIELD:
                s.Comment = v;
                break;
            case GROUP_FIELD:
                s.Group = v;
                break;
            case tlbl:
                break;
            case COMPOSER_FIELD:
                s.Composer = v;
                break;
            case YEAR_FIELD:
                s.Year = v;
                break;
            case tadd:
                break;
            case KEY_FIELD:
                s.Key = v;
                break;
        }
        return s;
    }



}

export default Song;