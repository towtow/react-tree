export default function copy(d, ...ss) {
    return ss.reduce(function (acc, s) {
        for (var k in s) {
            acc[k] = s[k];
        }
        return acc;
    }, d);
}
