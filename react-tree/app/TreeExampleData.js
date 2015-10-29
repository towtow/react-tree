import n from './mkNode';

export default [n('North America', {}, [n('USA', {
    population: 3, someNameLikeProp: 'USA'
}, [n('South Carolina'), n('Texas'), n('Oregon'), n('South Dakota')]), n('Canada'), n('Mexico')], true),
    n('Europe', {}, [n('Norway'), n('Sweden'), n('France'), n('Germany')], true)];
