
import { describe,expect, test} from '@jest/globals';
import {existsSync,lstatSync} from 'fs';
import getPathToDatabaseFile from '../../src/Util/getPathToDatabaseFile';

describe('Get Path to Database File',()=>{
    const databaseFile=getPathToDatabaseFile();

    test('Does File Exist?',()=>expect(existsSync(databaseFile)).toBe(true));

    test('Is a file and Not Directory',()=>{
     const stat = lstatSync(databaseFile);

        expect(stat.isDirectory()).toBe(false);
        expect(stat.isFile()).toBe(true);
    });


    test('GetPathToDatabaseFile',()=>expect(databaseFile).toBeTruthy());
})
   

