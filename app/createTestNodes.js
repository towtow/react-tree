import Node from './Node';

export default function () {
    return [Node('North America',
            [Node('USA',
                    [Node('York'),
                        Node('Texas'),
                        Node('Oregon'),
                        Node('South Dakota')]),
                Node('Canada'),
                Node('Mexico')],
                 true),
        Node('Europe',
                [Node('Norway'),
                    Node('Sweden'),
                    Node('France'),
                    Node('Germany')],
             true)];
};
