import path from 'path';
import os from 'os';


// const debug = /development/ig.test(process.env.NODE_ENV)

const getDefaultPath = (): string => {

    const platform = os.platform();
    const computer = process.env.COMPUTERNAME;

    switch (platform) {
        case "linux":
            return path.join(os.homedir(), 'programming', 'serato_js', "_Serato_");
        case 'win32':
            return computer === 'NORCUPCAKE2'
                ? 'C:\\programming\\serato_js\\_Serato_'
                : path.join(os.homedir(), "Music", "_Serato_");
        default:
            break;
    }

    debugger;
    return "";
}
export default getDefaultPath;