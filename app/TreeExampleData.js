import Node from './Node';

export default [Node('North America', {}, [Node('USA',
        {
            population: 3,
            someNameLikeProp: 'USA'
        },
        [Node('South Carolina'),
            Node('Texas'),
            Node('Oregon'),
            Node('South Dakota')]),
    Node('Canada'),
    Node('Mexico')], true),
    Node('Europe',
            {},
            [Node('Norway'),
                Node('Sweden'),
                Node('France'),
                Node('Germany')],
         true)];
