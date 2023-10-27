import {describe, expect, test} from '@jest/globals';

import { getItems  } from '../src/Util';
import {FILE_PATH} from './data';






describe("Song module",()=>{
    test('Should create songs',()=>{

        const items = getItems(FILE_PATH);
        
        const first = items[0];


        expect(first).toBeTruthy();
        expect(first).not.toBeNull();
        console.log(first);

    });
})