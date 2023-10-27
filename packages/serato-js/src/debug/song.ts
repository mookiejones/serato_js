import Song from "../Song";
import { getItems } from "../Util";

const filePath="C:\\Source\\serato_js\\New folder\\_Serato_\\database V2";
const items = getItems(filePath);

var songs = items.map(o=>Song.create(o));
debugger;

console.log(songs);
debugger;