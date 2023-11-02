import getDefaultPath from "./getDefaultPath";
import path from 'path';;
import {lstatSync} from 'fs';


const getPathToDatabaseFile = (value?:string|null):string =>{

    let defaultPath = value||getDefaultPath();



    let stat = lstatSync(defaultPath);

    // is it a file?
    let isFile = stat.isFile();

    console.log(isFile);
    let isDirectory = stat.isDirectory();
    console.log(isDirectory);

    return  stat.isDirectory()
    ? path.join(defaultPath,"database V2")
    :defaultPath;
     
}

export default getPathToDatabaseFile;