import {describe, expect, test} from '@jest/globals';
import {readFileSync} from 'fs';
import Struc   from '../../src/util/jsPack';
import {FILE_PATH} from '../data';
import{chunk,getPathToDatabaseFile} from '../../src/util';



describe('Test Struc Functions',()=>{
    const databaseFile = getPathToDatabaseFile(FILE_PATH);

  
 


    test('Does it even work',()=>{

    const contents = readFileSync(databaseFile,'ascii');

    const chunks = chunk(contents,8);

    const first = chunks[0];


    const whoKnows = Struc.Unpack('>4sI',first.raw);
    console.log(`whoKnows: ${whoKnows}`)
    const length = first.raw.length;
    console.log(`length: ${length}`)
    console.log(first);
        expect('pack').toBe('1');
    })
})