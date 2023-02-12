import {describe, expect, test} from '@jest/globals';
import Database from '../src/Database';
describe("Create Database",()=>{
    test('Should create a database',()=>{

        const filePath="C:\\Source\\serato_js\\New folder\\_Serato_\\database V2";
        let database = Database.getDatabase(filePath);

        expect(database).not.toBeNull();

    });
})