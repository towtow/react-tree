export default function (text, cs, initiallyExpanded) {
    var o = {
        text: text,
        children: cs || [],
        expanded: !!initiallyExpanded,
        expandable: function expandable() {
            return o.children.length > 0;
        },
        icon: function icon() {
            return o.expandable() ? (o.expanded ? '-' : '+') : undefined;
        }
    };
    return o;
};
