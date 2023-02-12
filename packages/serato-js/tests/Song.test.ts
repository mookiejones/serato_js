import {describe, expect, test} from '@jest/globals';
import { getItems  } from '../src/util';
const filePath="C:\\Source\\serato_js\\New folder\\_Serato_\\database V2";


describe("Song module",()=>{
    test('Should create songs',()=>{

        const items = getItems(filePath);
        
        const first = items[0];


        expect(first).toBeTruthy();
        expect(first).not.toBeNull();
        console.log(first);

    });
})