/*!
 *  Copyright © 2008 Fair Oaks Labs, Inc.
 *  All rights reserved.
 */

import { openSync,readSync } from 'fs';
import { intToHexbin,Struc } from '../util';
import { config } from 'dotenv';
//import {getPathToDatabaseFile,chunk} from '../Util';
//import _ from 'lodash';
config();
//const FILE_PATH="/Users/mookie/repos/serato_js/_Serato_";
const FILE_PATH=process.env.FILE_PATH;



const fd = openSync(FILE_PATH,'r');








const unpack = (format:string, header:Buffer):{name:string,length:number}=>{

    let data = pack.Unpack(format,header);

    return {
        name:data[0].toString(),
        length:data[1]
    }
}

const pack=new Struc();

for(let i = 0; i < fd;i=i+8){
    let buffer = Buffer.alloc(8);

    const d = readSync(fd,buffer,i,i+8,0);

    let { name,length } = unpack('>4sI',buffer);


    let type_id=name=='vrsn'
    ?'t'
    :name[0];


    buffer = Buffer.alloc(8);
    const l = readSync(length,buffer)


    let unPack=pack.Unpack('>4sI',buffer);

    console.log(d);
    console.log(unPack);





 


for (let b of buffer){


    let ss = intToHexbin(b);
    console.log(ss);
    const bType = typeof(b);
    console.log(bType);
    console.log(b);

 
}
}
/*
const databaseFile = getPathToDatabaseFile(FILE_PATH);



const syncStatus=openSync(FILE_PATH,'r');

console.log(syncStatus)

const contents = readFileSync(databaseFile,'binary');

const chunks = chunk(contents,8);


const first = _.first(chunks);


console.log(`raw: ${first.raw}, addr: ${first.addr}`);



const one = pack.Unpack('>4sI',first.raw);
console.log(one);
console.log(first);

console.log(contents);
console.log(databaseFile);



*/
