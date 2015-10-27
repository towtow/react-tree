var uniqueNodeID = 0;

export default function (text, data, cs, initiallyExpanded) {
    uniqueNodeID = uniqueNodeID + 1;
    return {
        key: uniqueNodeID,
        text: text,
        expanded: !!initiallyExpanded,
        selected: false,
        children: cs || [],
        data: data
    };
};
