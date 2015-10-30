var uniqueNodeID = 0;

export default function (text, data, cs, initiallyExpanded) {
    uniqueNodeID = uniqueNodeID + 1;
    return {
        id: uniqueNodeID, text: text, data: data, children: cs || [], expanded: !!initiallyExpanded
    };
};
