import getDefaultPath from '../../src/Util/getDefaultPath';

import { describe,expect, test} from '@jest/globals';
import { lstatSync, existsSync } from 'fs';

describe('Get Default Path to Music Directory',()=>{

    const defaultPath=getDefaultPath();
     
test('Make sure there is a value',()=>{
     
     

    expect(defaultPath).toBeTruthy();


    let stat = lstatSync(defaultPath);

    expect(stat.isDirectory()).toBe(true);


});

test('Make sure it is a directory',()=>expect(lstatSync(defaultPath).isDirectory()).toBe(true));

test('Make sure path exists',()=>expect(existsSync(defaultPath)).toBe(true));
test.todo('Test to make sure that default path is directory');
})
