import Database from '../Database/Database';
import { config } from 'dotenv';

config()

export const FILE_PATH=process.env.FILE_PATH||'';

var db = Database.getDatabase(FILE_PATH);

console.log('wtf');
console.log(db);
debugger;
