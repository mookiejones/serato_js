const { readFileSync } = require('fs');

const chunkSize = 8;

const enumerate = (filename) => {
  const buffer = readFileSync(filename, { flag: 'r' });
  const byteLength = buffer.length;
  const results = [];

  for (let i = 0; i < byteLength; i += chunkSize) {
    results.push({ i, header: new Uint8Array(buffer.slice(i, i + chunkSize)) });
  }

  return results;
};


const databaseFilename='C:\\Users\\admin\\Source\\Repos\\serato_js\\_Serato_\\database V2';
const results=enumerate(databaseFilename);





debugger;