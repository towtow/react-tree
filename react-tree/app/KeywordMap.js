import Keyword from './Keyword';

export default function (ks) {
    return (ks || []).reduce((acc, k) => {
        acc[k] = Keyword(k);
        return acc;
    }, {})
};
