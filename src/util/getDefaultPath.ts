import path from 'path';
import os from 'os';


// const debug = /development/ig.test(process.env.NODE_ENV)

/**
 * Get Default Path to Music Directory
 * @returns Default Path to Music Directory
 */
const getDefaultPath = (): string => {

    const platform = os.platform();
     
    switch (platform) {
        case "linux":
            return path.join(os.homedir(), 'programming', 'serato_js', "_Serato_");
        case "win32":
            return 'C:\\Users\\admin\\Source\\Repos\\serato_js\\_Serato_';
        default:            
            return path.join(os.homedir(), "Music", "_Serato_");

    }
}
export default getDefaultPath;