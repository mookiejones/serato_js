import {describe, expect, test} from '@jest/globals';
import {getIndices,getPathToDatabaseFile,Keys} from '../../src/util'
import {FILE_PATH} from '../data';
import{readFileSync} from 'fs';


describe('Get Indices for Songs',()=>{

    const databaseFile = getPathToDatabaseFile(FILE_PATH);
    const contents = readFileSync(databaseFile,'ascii');
    const numberType = typeof(1);
    test.each(getIndices(contents,Keys.OTRK))
    (`%i is a number`,(value)=>{

        const type = typeof(value);

        
        expect(value).toBeTruthy();
        expect(type).toBe(numberType);
    });   
});