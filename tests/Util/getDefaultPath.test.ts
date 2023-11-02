import getDefaultPath from '../../src/util/getDefaultPath';

import { describe,expect, test} from '@jest/globals';
import { lstatSync, existsSync } from 'fs';

describe('Get Default Path to Music Directory',()=>{

    const defaultPath=getDefaultPath();
    let stat = lstatSync(defaultPath);

    const isDirectory = stat.isDirectory();

    const isFile = stat.isFile();
     
test('Make sure there is a value',()=>{
    expect(defaultPath).toBeTruthy();
});

test('Make sure it is a directory',()=>expect(isDirectory).toBe(true));
test('Make sure it is not a file',()=>expect(isFile).toBe(false));

test('Make sure path exists',()=>expect(existsSync(defaultPath)).toBe(true));

})
