import {describe, expect, test} from '@jest/globals';

import  getItems   from '../../src/Util/getItems';
import {FILE_PATH} from '../data';
import getPathToDatabaseFile from '../../src/Util/getPathToDatabaseFile';




 
describe("Song module",()=>{
    const databaseFile= getPathToDatabaseFile(FILE_PATH);
    test('Should create songs',()=>{

       

         
        const items = getItems(databaseFile);
        
        const first = items[0];


        expect(first).toBeTruthy();
        expect(first).not.toBeNull();
        console.log(first);

    });
})