var uniqueNodeID = 0;

export default function (text, data, cs, initiallyExpanded) {
    uniqueNodeID = uniqueNodeID + 1;
    return {
        key: uniqueNodeID, text: text, data: data, children: cs || [], expanded: !!initiallyExpanded, selected: false
    };
};
