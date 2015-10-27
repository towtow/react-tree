function Node(text, cs, initallyExpanded) {
    var o = {
        text: text,
        children: cs || [],
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
export default function () {
    return [
        Node('North America', [
            Node('USA', [
                Node('York'),
                Node('Texas'),
                Node('Oregon'),
                Node('South Dakota')
            ]),
            Node('Canada'),
            Node('Mexico')
        ], true),
        Node('Europe', [
            Node('Norway'),
            Node('Sweden'),
            Node('France'),
            Node('Germany')], true)];
};
