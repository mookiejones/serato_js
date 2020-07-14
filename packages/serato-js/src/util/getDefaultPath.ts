import path from 'path';
import os from 'os';


// const debug = /development/ig.test(process.env.NODE_ENV)

const getDefaultPath = (platform: string): string => {
    debugger;
    switch (platform) {
        case "linux":
            return '/home/mookie/programming/serato_js/_Serato_';
        case 'win32':
            return path.join(os.homedir(), "Music", "_Serato_");
        default:
            break;
    }

    debugger;
}
export default getDefaultPath;