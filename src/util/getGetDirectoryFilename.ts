import * as fs from 'fs';
import path from 'path';


/**
 * 
 * @param file {String} filePath to database file
 * @description If it is a directory, then it will add database file
 * @returns Path to databaseFile
 */
const getGetDirectoryFilename=(value:string)=>{
    let stat = fs.lstatSync(value);

    return  stat.isDirectory()
        ? path.join(value,"database V2")
        :value;

     
       
};

export default getGetDirectoryFilename;