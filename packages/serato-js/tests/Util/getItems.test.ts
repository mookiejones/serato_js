import {describe, expect, test} from '@jest/globals';

import  getItems   from '../../src/Util/getItems';
import {FILE_PATH} from '../data';
import getPathToDatabaseFile from '../../src/Util/getPathToDatabaseFile';


describe('Get Items for Songs',()=>{

    const databaseFile = getPathToDatabaseFile(FILE_PATH);


     
    test('Get Items',()=>{


        const items = getItems(databaseFile);


        const first = items[0];

        console.log(first);
        expect(1).toBe(2);
    })
})