import {describe, expect, test} from '@jest/globals';

import {FILE_PATH} from '../data';

import {getItems,getPathToDatabaseFile} from '../../src/util';

describe('Get Items for Songs',()=>{

    const databaseFile = getPathToDatabaseFile(FILE_PATH);


     
    test('Get Items',()=>{


        const items = getItems(databaseFile);


        const first = items[0];

        console.log(first);
        expect(1).toBe(1);
    })
})