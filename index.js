//-------------------------------------//
//    graphics.js   //
/* graphics for node */
// and yes I rewrote the entire thing //
/**
 * @license MIT
 * @author ghostedbread
 * @version 1.1
 * @description Graphics For Node
 */
let colors = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    reset: '\x1b[0m',
    // backgrounds
    bgBlack: '\x1b[40m',
    bgRed: '\x1b[41m',
    bgGreen: '\x1b[42m',
    bgYellow: '\x1b[43m',
    bgBlue: '\x1b[44m',
    bgMagenta: '\x1b[45m',
    bgCyan: '\x1b[46m',
    bgWhite: '\x1b[47m',
    // other colors
    lightBlack: '\x1b[38;5;8m',
    lightRed: '\x1b[38;5;9m',
    lightGreen: '\x1b[38;5;10m',
    lightYellow: '\x1b[38;5;11m',
    lightBlue: '\x1b[38;5;12m',
    lightMagenta: '\x1b[38;5;13m',
    lightCyan: '\x1b[38;5;14m',
    lightWhite: '\x1b[38;5;15m'
    
};
function Label(text, bg, fg) {
    return `${colors[bg]}${colors[fg]}${text}${colors.reset}`;
}
