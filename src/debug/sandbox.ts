/*!
 *  Copyright © 2008 Fair Oaks Labs, Inc.
 *  All rights reserved.
 */

import { openSync,readSync,lstatSync, readFileSync } from 'fs';
import { intToHexbin,struc,enumerate } from '../util';
import { config } from 'dotenv';
//import {getPathToDatabaseFile,chunk} from '../Util';
//import _ from 'lodash';
config();
//const FILE_PATH="/Users/mookie/repos/serato_js/_Serato_";
//const FILE_PATH=process.env.FILE_PATH;

import {FILE_PATH, DatabaseFilePath,DATABASE_FILEPATH} from '../data'




const buffer = readFileSync(DATABASE_FILEPATH,{flag:'r'})

const items = enumerate(buffer);



const fieldParsers = x=>{

    let result;

    switch(x){
        case 'b':
            return struc.Unpack('?',x)[0];
            case 'o':
                return struc.Unpack('?',x)[0];
        }
    return switch(x){
        'b':struc.Unpack('?',x)[0]
    }
}




const unpack = (format:string, header:Buffer|Uint8Array):{name:string,length:number}=>{

    let data = struc.Unpack(format,header);

    return {
        name:data[0].toString(),
        length:data[1]
    }
}


const parse = (buffer:Buffer) =>{

    let results = enumerate(buffer)
        .map(({header},index)=>{

            const {name,length} = unpack('>4sI',header);

        // vrsn field has no type_id; but contains text;
            let type_id = name==='vrsn'
        ?'t'
        :name[0];

    let data = buffer.slice(i,length);
        })
}

for(let {i,header} of items)
{


    console.log(i);

    const {name,length} = unpack('>4sI',header);

    // vrsn field has no type_id; but contains text;
    let type_id = name==='vrsn'
        ?'t'
        :name[0];

    let data = buffer.slice(i,length);
    console.log(data);
    if(name=='vrsn')
    console.log(type_id);
    const object = struc.Unpack('>4sI',header)

    console.log(object);
}
const lstat = lstatSync(FILE_PATH);


const dstat = lstatSync(DatabaseFilePath);

console.log(dstat);

console.log(DatabaseFilePath);

console.log(lstat);

const fd = openSync(FILE_PATH,'r');



const text = readFileSync(FILE_PATH,{flag:'r'});

console.log(text);



const pack=struc;

for(let i = 0; i < fd;i=i+8){
    let buffer = Buffer.alloc(8);

    const d = readSync(fd,buffer,i,i+8,0);

    let { name,length } = unpack('>4sI',buffer);


    let type_id=name=='vrsn'
    ?'t'
    :name[0];
    console.log(type_id);


    buffer = Buffer.alloc(8);
    const l = readSync(length,buffer)
    console.log(l);

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
