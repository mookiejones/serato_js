
import os from 'os';

const debug = /development/ig.test(process.env.NODE_ENV)
const flavor = os.platform();
debugger;
const getDefaultPath = () => {
    switch (flavor) {
        case "linux":
            return '/home/mookie/programming/serato_js/_Serato_'
        default:
            break;
    }

    debugger;
}
export default getDefaultPath;