function CountryModel(text) {
    var o = {
        children: [],
        text: text,
        icon: function icon() {
            if (o.children.length > 0) {
                if (o.children[0].visible === false) {
                    return '+'
                }
                return '-';
            }
        },
        visible: false,
        selected: false
    };
    return o;
}
export default function createMockModel() {
    var countries = [];

    var america = CountryModel('North America');
    america.visible = true;

    var usa = CountryModel('USA');
    usa.children.push(CountryModel('York'));
    usa.children.push(CountryModel('Texas'));
    usa.children.push(CountryModel('Oregon'));
    usa.children.push(CountryModel('South Dakota'));
    america.children.push(usa);

    america.children.push(CountryModel('Canada'));
    america.children.push(CountryModel('Mexico'));

    var europe = CountryModel('Europe');
    europe.children.push(CountryModel('Norway'));
    europe.children.push(CountryModel('Sweden'));
    europe.children.push(CountryModel('France'));
    europe.children.push(CountryModel('Germany'));
    europe.visible = true;

    countries.push(america);
    countries.push(europe);

    return countries;
};
