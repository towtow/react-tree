/* globals console */

export default {
    msg: (...x) => console.log.apply(console, x), imsg: (i, ...x) => console.log.bind(console, '>'.repeat(i)).apply(null, x)
};
