import { readFileSync } from 'fs';

const chunkSize = 8;

interface ResultItem {
  i: number;
  header: Uint8Array;
}

const enumerateBuffer = (buffer:Buffer):ResultItem[]=>{

    const byteLength = buffer.length;
    const results: ResultItem[] = [];

    for (let i = 0; i < byteLength; i += chunkSize) {

        const header = buffer.slice(i,i+chunkSize);

     

        results.push({ i, header});
      }
    
      return results;
    
}
const enumerateFile = (filename:string):ResultItem[]=>{
    const buffer = readFileSync(filename,{flag:'r'});
    return enumerateBuffer(buffer);
}
/**
 * 
 * @param filename 
 * @returns 
 */
export function enumerate  (
    data: string|Buffer|null,
    ): ResultItem[] {

        const isBuffer = Buffer.isBuffer(data);

        return isBuffer
        ?enumerateBuffer(data as Buffer)
        :enumerateFile(data as string);

};


export default enumerate;