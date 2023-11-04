import { openSync,readSync,lstatSync, readFileSync } from 'fs';
import { intToHexbin,enumerate,unpack } from '../util';
import _ from 'lodash';
import io from 'io';
import {FILE_PATH, DatabaseFilePath,DATABASE_FILEPATH} from '../data'
import { assert } from 'console';


const buffer = readFileSync(DatabaseFilePath,{flag:'r'})

const items = enumerate(buffer);


const tuple=(o)=>{
    debugger;
}

const FIELDPARSERS = {
    'b': function(x) {

      return unpack('?', x)[0];
    },
    'o': function(x) {
      return tuple(parse(new io.BytesIO(x)));
    },
    'p': function(x) {
      return (x.slice(1) + '\x00').toString();//utf-16
    },
    'r': function(x) {
      return tuple(parse(new io.BytesIO(x)));
    },
    's': function(x) {
      return unpack('>H', x)[0];
    },
    't': function(x) {
      return (x.slice(1) + '\x00').toString();//'utf-16'
    },
    'u': function(x) {
      return unpack('>I', x)[0];
    }
  };
interface ParseResult {
    name:string;
    length:number;
    value:any;
}

const parse = (buffer:Buffer) =>{

    let results = enumerate(buffer)
        .map(({header},index)=>{

            const {name,length} = unpack('>4sI',header);

        
            // vrsn field has no type_id; but contains text;
            let type_id = name==='vrsn'
            ?'t'
            :name[0];


                let data = buffer.slice(index,length);



                assert(data.length===length);


                let fieldParser;

                try {
                    fieldParser=FIELDPARSERS[type_id];
                }
                catch (error) {
                debugger;   
                }

                var parseType = typeof(fieldParser);
                debugger;
                let value = fieldParser(data);

                return {name,length,value}
        });

        debugger;

        return results;
}



for(let {name,length,value } of parse(buffer)){
    debugger;
}
