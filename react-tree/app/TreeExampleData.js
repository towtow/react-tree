import Immutable from 'immutable';

var uniqueNodeID = 0;

var n = (text, data, cs, initiallyExpanded) => {
    uniqueNodeID = uniqueNodeID + 1;
    return {
        id: uniqueNodeID, text: text, data: data, children: cs || [], expanded: !!initiallyExpanded, selected: false
    };
};

export default Immutable.fromJS([ //
                                    n('North America', {}, [ //
                                        n('USA', {population: 3, someNameLikeProp: 'USA'}, [ //
                                            n('South Carolina'), //
                                            n('Texas'), //
                                            n('Oregon'), //
                                            n('South Dakota') //
                                        ]), //
                                        n('Canada'), //
                                        n('Mexico')
                                    ], true), //
                                    n('Europe', {}, [ //
                                        n('Norway'), //
                                        n('Sweden'), //
                                        n('France'), //
                                        n('Germany')
                                    ], true)
                                ]);
