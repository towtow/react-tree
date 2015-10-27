function Node(text, initallyExpanded) {
    var o = {
        text: text,
        children: [],
        expanded: !!initallyExpanded,
        expandable: function expandable() {
            return o.children.length > 0;
        },
        icon: function icon() {
            return o.expandable() ? (o.expanded ? '-' : '+') : undefined;
        }
    };
    return o;
}
export default function createTestNodes() {
    var countries = [];

    var america = Node('North America', true);

    var usa = Node('USA');
    usa.children.push(Node('York'));
    usa.children.push(Node('Texas'));
    usa.children.push(Node('Oregon'));
    usa.children.push(Node('South Dakota'));
    america.children.push(usa);

    america.children.push(Node('Canada'));
    america.children.push(Node('Mexico'));

    var europe = Node('Europe');
    europe.children.push(Node('Norway'));
    europe.children.push(Node('Sweden'));
    europe.children.push(Node('France'));
    europe.children.push(Node('Germany'));

    countries.push(america);
    countries.push(europe);

    return countries;
};
