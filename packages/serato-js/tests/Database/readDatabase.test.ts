import { expect, test} from '@jest/globals';
import * as fs from 'fs';
import getGetDirectoryFilename from '../../src/Util/getGetDirectoryFilename'
import {FILE_PATH} from '../data';
 
test("Read file for database",()=>{

    const filePath=getGetDirectoryFilename(FILE_PATH);

    const stat = fs.lstatSync(filePath);

    const isDirectory = stat.isDirectory();

    const isFile = stat.isFile();

    expect(isDirectory).toBe(false);
    expect(isFile).toBe(true);
    expect(FILE_PATH).toBeTruthy();


    console.log(`filePath: ${filePath}`);

   

     
})