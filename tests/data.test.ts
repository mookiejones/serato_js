import { expect, test} from '@jest/globals';
import { FILE_PATH } from './data';
import path from 'path';
import * as fs from 'fs';
import {config} from 'dotenv';

config();

test('Check to see if file exists',()=>{



    const basePath = process.cwd();
    const databaseFile = path.join(basePath,FILE_PATH);

    const exists = fs.lstatSync(databaseFile);

    expect(exists).toBeTruthy();

})

