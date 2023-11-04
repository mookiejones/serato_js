
import {struc} from '../util';

interface UnpackResult {
    name:string;
    length:number;
}
const unpack = (format:string, header:Buffer|Uint8Array):UnpackResult =>{

    let data = struc.Unpack(format,header);

    return {
        name:data[0].toString(),
        length:data[1]
    }
}


export default unpack;