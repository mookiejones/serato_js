import {describe, expect, test} from '@jest/globals';
import {readFileSync} from 'fs';
import Struc   from '../../src/Util/jsPack';
import {FILE_PATH} from '../data';
import getPathToDatabaseFile from '../../src/Util/getPathToDatabaseFile';

type Result={
    addr:number;
    raw:any;
}

/*
Requirements ex:
Content in 512 bytes chunks. 
Send the 512 bytes packet as a 1024 char string, where each byte is sent as a 
2 hex digits. 
An "addr" field starts from 0 and tracks the offset of the first byte of the 
packet. 
*/
function chunk(s, maxBytes:number) {
    //! https://nodejs.org/api/buffer.html#buffer_buf_slice_start_end
    /*
      buf.slice([start[, end]])
      start <integer> Where the new Buffer will start. Default: 0.
      end <integer> Where the new Buffer will end (not inclusive). Default: buf.length.
      Returns: <Buffer>
    */
  
    let buf = Buffer.from(s);  
    const result:Result[] = [];
    let readBuffer = true
    let startChunkByte = 0
    let endChunkByte = maxBytes
    while(readBuffer) {
      // First round
      startChunkByte === 0 ? endChunkByte = startChunkByte + maxBytes : ""
  
      //Handle last chunk
      endChunkByte >= buf.length ? readBuffer = false : ""
  
      // addr: the position of the first bytes.  raw: the chunk of x bytes
      result.push({"addr":startChunkByte,"raw":buf.slice(startChunkByte, endChunkByte).toString('hex')});
  
      startChunkByte = endChunkByte
      endChunkByte = startChunkByte + maxBytes
    }
    return result;
  }
  

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