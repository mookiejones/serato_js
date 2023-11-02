import { config } from 'dotenv';
import path from 'path';
import * as fs from 'fs';

config();



/**
 * @description Exports Path to file
 */
export const FILE_PATH = process.env.FILE_PATH||"";


export const DATABASE_FILEPATH=process.env.DATABASE_FILEPATH||"";

export const DatabaseFilePath = path.join(process.cwd(),FILE_PATH);
console.log(DatabaseFilePath);
let lstat= fs.lstatSync(FILE_PATH);

console.log(lstat);




