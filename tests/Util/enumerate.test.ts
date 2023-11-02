import { expect, test} from '@jest/globals';



import {enumerate} from '../../src/util';
import { DATABASE_FILEPATH} from '../data'


test('Enumerate file',()=>{

    const items = enumerate(DATABASE_FILEPATH);

    expect(items).toBeTruthy();
    
   
})