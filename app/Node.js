var nextId = 0;

export default function (text, data, cs, initiallyExpanded) {
    return {
        key: nextId++,
        text: text,
        expanded: !!initiallyExpanded,
        selected: false,
        children: cs || [],
        data: data
    };
};
