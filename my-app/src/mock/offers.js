const offers = [
    {
        'id': 1,
        'code': 'SO757575',
        'name': 'Честер Bass',
        'type': 'электрогитара',
        'popularity': 15,
        'strings': 7,
        'price': 17500
    },
    {
        'id': 2,
        'code': 'TK129049',
        'name': 'СURT Z300',
        'type': 'электрогитара',
        'popularity': 9,
        'strings': 7,
        'price': 29500
    },
    {
        'id': 3,
        'code': 'RO111111',
        'name': 'Roman LX',
        'type': 'укулеле',
        'popularity': 21,
        'strings': 4,
        'price': 6800
    },
    {
        'id': 4,
        'code': 'TK436457',
        'name': 'СURT T300',
        'type': 'электрогитара',
        'popularity': 15,
        'strings': 6,
        'price': 30000
    },
    {
        'id': 5,
        'code': 'DI192138',
        'name': 'Dania Super',
        'type': 'акустическая гитара',
        'popularity': 5,
        'strings': 7,
        'price': 3500
    },
    {
        'id': 6,
        'code': 'SO934345',
        'name': 'Честер WX',
        'type': 'электрогитара',
        'popularity': 17,
        'strings': 6,
        'price': 15300
    },
    {
        'id': 7,
        'code': 'DI082347',
        'name': 'Dania VX',
        'type': 'укулеле',
        'popularity': 5,
        'strings': 4,
        'price': 2200
    },
    {
        'id': 8,
        'code': 'SO135646',
        'name': 'Честер Plus',
        'type': 'электрогитара',
        'popularity': 27,
        'strings': 4,
        'price': 30000
    },
    {
        'id': 9,
        'code': 'VO154751',
        'name': 'Виолана 300',
        'type': 'акустическая гитара',
        'popularity': 3,
        'strings': 7,
        'price': 1700
    },
    // {
    //     'id': 10,
    //     'code': 'TK244556',
    //     'name': 'СURT Clasic',
    //     'type': 'электрогитара',
    //     'popularity': 20,
    //     'strings': 4,
    //     'price': 23000
    // },
    // {
    //     'id': 11,
    //     'code': 'TK134663',
    //     'name': 'СURT Z250',
    //     'type': 'электрогитара',
    //     'popularity': 19,
    //     'strings': 4,
    //     'price': 18700
    // },
    // {
    //     'id': 12,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 13,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 14,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 15,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 16,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 17,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 18,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 19,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 20,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 21,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 22,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 23,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 24,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 25,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 26,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 27,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 28,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 29,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
    // {
    //     'id': 30,
    //     'code': '',
    //     'name': '',
    //     'type': '',
    //     'popularity': ,
    //     'strings': ,
    //     'price': 
    // },
];

export default offers
