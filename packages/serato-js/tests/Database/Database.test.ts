import {describe, expect, test} from '@jest/globals';
import Database from '../../src/Database';
import {FILE_PATH} from '../data';



describe("Create Database",()=>{
    console.log(`filePath : ${FILE_PATH}`);

    test('Should create a database',()=>{


        var filePath = FILE_PATH?.toString()||'';

        console.log(`filePath : ${filePath}`);

        // const filePath="C:\\Source\\serato_js\\New folder\\_Serato_\\database V2";
        let database = Database.getDatabase(filePath);

        expect(1).toBe(1);

         expect(database).not.toBeNull();

    });
})