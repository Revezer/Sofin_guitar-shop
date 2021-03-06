const offers = [
    {
        'id': 1,
        'code': 'SO757575',
        'name': 'Честер Bass',
        'type': 'электрогитара',
        'popularity': 15,
        'strings': 7,
        'price': 17500,
        'amount': 1
    },
    {
        'id': 2,
        'code': 'TK129049',
        'name': 'СURT Z300',
        'type': 'электрогитара',
        'popularity': 9,
        'strings': 7,
        'price': 29500,
        'amount': 1
    },
    {
        'id': 3,
        'code': 'RO111111',
        'name': 'Roman LX',
        'type': 'укулеле',
        'popularity': 21,
        'strings': 4,
        'price': 6800,
        'amount': 1
    },
    {
        'id': 4,
        'code': 'TK436457',
        'name': 'СURT T300',
        'type': 'электрогитара',
        'popularity': 15,
        'strings': 6,
        'price': 30000,
        'amount': 1
    },
    {
        'id': 5,
        'code': 'DI192138',
        'name': 'Dania Super',
        'type': 'акустическая гитара',
        'popularity': 5,
        'strings': 7,
        'price': 3500,
        'amount': 1
    },
    {
        'id': 6,
        'code': 'SO934345',
        'name': 'Честер WX',
        'type': 'электрогитара',
        'popularity': 17,
        'strings': 6,
        'price': 15300,
        'amount': 1
    },
    {
        'id': 7,
        'code': 'DI082347',
        'name': 'Dania VX',
        'type': 'укулеле',
        'popularity': 5,
        'strings': 4,
        'price': 2200,
        'amount': 1
    },
    {
        'id': 8,
        'code': 'SO135646',
        'name': 'Честер Plus',
        'type': 'электрогитара',
        'popularity': 27,
        'strings': 4,
        'price': 30000,
        'amount': 1
    },
    {
        'id': 9,
        'code': 'VO154751',
        'name': 'Виолана 300',
        'type': 'акустическая гитара',
        'popularity': 3,
        'strings': 7,
        'price': 1700,
        'amount': 1
    },
    {
        'id': 10,
        'code': 'TK244556',
        'name': 'СURT Clasic',
        'type': 'электрогитара',
        'popularity': 20,
        'strings': 4,
        'price': 23000,
        'amount': 1
    },
    {
        'id': 11,
        'code': 'TK134663',
        'name': 'СURT Z250',
        'type': 'электрогитара',
        'popularity': 19,
        'strings': 4,
        'price': 18700,
        'amount': 1
    },
    {
        'id': 12,
        'code': 'SO123212',
        'name': 'Честер 7X',
        'type': 'электрогитара',
        'popularity': 30,
        'strings': 7,
        'price': 35000,
        'amount': 1
    },
    {
        'id': 13,
        'code': 'SO123234',
        'name': 'Честер 6V',
        'type': 'электрогитара',
        'popularity': 28,
        'strings': 6,
        'price': 14900,
        'amount': 1
    },
    {
        'id': 14,
        'code': 'VO519510',
        'name': 'Виолана Mix',
        'type': 'акустическая гитара',
        'popularity': 7,
        'strings': 6,
        'price': 7600,
        'amount': 1
    },
    {
        'id': 15,
        'code': 'VO457369',
        'name': 'Виолана 250x',
        'type': 'акустическая гитара',
        'popularity': 19,
        'strings': 6,
        'price': 6500,
        'amount': 1
    },
    {
        'id': 16,
        'code': 'FB625903',
        'name': 'Фабио Лайт',
        'type': 'акустическая гитара',
        'popularity': 26,
        'strings': 7,
        'price': 12000,
        'amount': 1
    },
    {
        'id': 17,
        'code': 'FB576948',
        'name': 'Фабио L100',
        'type': 'акустическая гитара',
        'popularity': 31,
        'strings': 7,
        'price': 9900,
        'amount': 1
    },
    {
        'id': 18,
        'code': 'LU012032',
        'name': 'Liana Z200',
        'type': 'акустическая гитара',
        'popularity': 28,
        'strings': 12,
        'price': 8900,
        'amount': 1
    },
    {
        'id': 19,
        'code': 'LU546853',
        'name': 'Liana Z100',
        'type': 'акустическая гитара',
        'popularity': 34,
        'strings': 12,
        'price': 10500,
        'amount': 1
    },
    {
        'id': 20,
        'code': 'LU458283',
        'name': 'Liana Z300',
        'type': 'акустическая гитара',
        'popularity': 9,
        'strings': 6,
        'price': 13300,
        'amount': 1
    },
    {
        'id': 21,
        'code': 'RO324341',
        'name': 'Roman RX',
        'type': 'укулеле',
        'popularity': 37,
        'strings': 4,
        'price': 4800,
        'amount': 1
    },
    {
        'id': 22,
        'code': 'RO214235',
        'name': 'Roman TX',
        'type': 'укулеле',
        'popularity': 5,
        'strings': 4,
        'price': 1900,
        'amount': 1
    },
    {
        'id': 23,
        'code': 'DI132414',
        'name': 'Dania U100',
        'type': 'укулеле',
        'popularity': 23,
        'strings': 4,
        'price': 2500,
        'amount': 1
    },
    {
        'id': 24,
        'code': 'DI934754',
        'name': 'Dania WR',
        'type': 'укулеле',
        'popularity': 3,
        'strings': 4,
        'price': 3800,
        'amount': 1
    },
    {
        'id': 25,
        'code': 'DI034292',
        'name': 'Dania LE',
        'type': 'укулеле',
        'popularity': 10,
        'strings': 4,
        'price': 4100,
        'amount': 1
    },
    {
        'id': 26,
        'code': 'MI193214',
        'name': 'Mirana V10',
        'type': 'укулеле',
        'popularity': 14,
        'strings': 4,
        'price': 2700,
        'amount': 1
    },
    {
        'id': 27,
        'code': 'VO043244',
        'name': 'Виолана Mini',
        'type': 'укулеле',
        'popularity': 29,
        'strings': 4,
        'price': 6700,
        'amount': 1
    },
    {
        'id': 1,
        'code': 'SO757575',
        'name': 'Честер Bass',
        'type': 'электрогитара',
        'popularity': 15,
        'strings': 7,
        'price': 17500,
        'amount': 1
    },
    {
        'id': 2,
        'code': 'TK129049',
        'name': 'СURT Z300',
        'type': 'электрогитара',
        'popularity': 9,
        'strings': 7,
        'price': 29500,
        'amount': 1
    },
    {
        'id': 3,
        'code': 'RO111111',
        'name': 'Roman LX',
        'type': 'укулеле',
        'popularity': 21,
        'strings': 4,
        'price': 6800,
        'amount': 1
    },
    {
        'id': 4,
        'code': 'TK436457',
        'name': 'СURT T300',
        'type': 'электрогитара',
        'popularity': 15,
        'strings': 6,
        'price': 30000,
        'amount': 1
    },
    {
        'id': 5,
        'code': 'DI192138',
        'name': 'Dania Super',
        'type': 'акустическая гитара',
        'popularity': 5,
        'strings': 7,
        'price': 3500,
        'amount': 1
    },
    {
        'id': 6,
        'code': 'SO934345',
        'name': 'Честер WX',
        'type': 'электрогитара',
        'popularity': 17,
        'strings': 6,
        'price': 15300,
        'amount': 1
    },
    {
        'id': 7,
        'code': 'DI082347',
        'name': 'Dania VX',
        'type': 'укулеле',
        'popularity': 5,
        'strings': 4,
        'price': 2200,
        'amount': 1
    },
    {
        'id': 8,
        'code': 'SO135646',
        'name': 'Честер Plus',
        'type': 'электрогитара',
        'popularity': 27,
        'strings': 4,
        'price': 30000,
        'amount': 1
    },
    {
        'id': 9,
        'code': 'VO154751',
        'name': 'Виолана 300',
        'type': 'акустическая гитара',
        'popularity': 3,
        'strings': 7,
        'price': 1700,
        'amount': 1
    },
    {
        'id': 10,
        'code': 'TK244556',
        'name': 'СURT Clasic',
        'type': 'электрогитара',
        'popularity': 20,
        'strings': 4,
        'price': 23000,
        'amount': 1
    },
    {
        'id': 11,
        'code': 'TK134663',
        'name': 'СURT Z250',
        'type': 'электрогитара',
        'popularity': 19,
        'strings': 4,
        'price': 18700,
        'amount': 1
    },
    {
        'id': 12,
        'code': 'SO123212',
        'name': 'Честер 7X',
        'type': 'электрогитара',
        'popularity': 30,
        'strings': 7,
        'price': 35000,
        'amount': 1
    },
    {
        'id': 13,
        'code': 'SO123234',
        'name': 'Честер 6V',
        'type': 'электрогитара',
        'popularity': 28,
        'strings': 6,
        'price': 14900,
        'amount': 1
    },
    {
        'id': 14,
        'code': 'VO519510',
        'name': 'Виолана Mix',
        'type': 'акустическая гитара',
        'popularity': 7,
        'strings': 6,
        'price': 7600,
        'amount': 1
    },
    {
        'id': 15,
        'code': 'VO457369',
        'name': 'Виолана 250x',
        'type': 'акустическая гитара',
        'popularity': 19,
        'strings': 6,
        'price': 6500,
        'amount': 1
    },
    {
        'id': 16,
        'code': 'FB625903',
        'name': 'Фабио Лайт',
        'type': 'акустическая гитара',
        'popularity': 26,
        'strings': 7,
        'price': 12000,
        'amount': 1
    },
    {
        'id': 17,
        'code': 'FB576948',
        'name': 'Фабио L100',
        'type': 'акустическая гитара',
        'popularity': 31,
        'strings': 7,
        'price': 9900,
        'amount': 1
    },
    {
        'id': 18,
        'code': 'LU012032',
        'name': 'Liana Z200',
        'type': 'акустическая гитара',
        'popularity': 28,
        'strings': 12,
        'price': 8900,
        'amount': 1
    },
    {
        'id': 19,
        'code': 'LU546853',
        'name': 'Liana Z100',
        'type': 'акустическая гитара',
        'popularity': 34,
        'strings': 12,
        'price': 10500,
        'amount': 1
    },
    {
        'id': 20,
        'code': 'LU458283',
        'name': 'Liana Z300',
        'type': 'акустическая гитара',
        'popularity': 9,
        'strings': 6,
        'price': 13300,
        'amount': 1
    },
    {
        'id': 21,
        'code': 'RO324341',
        'name': 'Roman RX',
        'type': 'укулеле',
        'popularity': 37,
        'strings': 4,
        'price': 4800,
        'amount': 1
    },
    {
        'id': 22,
        'code': 'RO214235',
        'name': 'Roman TX',
        'type': 'укулеле',
        'popularity': 5,
        'strings': 4,
        'price': 1900,
        'amount': 1
    },
    {
        'id': 23,
        'code': 'DI132414',
        'name': 'Dania U100',
        'type': 'укулеле',
        'popularity': 23,
        'strings': 4,
        'price': 2500,
        'amount': 1
    },
    {
        'id': 24,
        'code': 'DI934754',
        'name': 'Dania WR',
        'type': 'укулеле',
        'popularity': 3,
        'strings': 4,
        'price': 3800,
        'amount': 1
    },
    {
        'id': 25,
        'code': 'DI034292',
        'name': 'Dania LE',
        'type': 'укулеле',
        'popularity': 10,
        'strings': 4,
        'price': 4100,
        'amount': 1
    },
    {
        'id': 26,
        'code': 'MI193214',
        'name': 'Mirana V10',
        'type': 'укулеле',
        'popularity': 14,
        'strings': 4,
        'price': 2700,
        'amount': 1
    },
    {
        'id': 27,
        'code': 'VO043244',
        'name': 'Виолана Mini',
        'type': 'укулеле',
        'popularity': 29,
        'strings': 4,
        'price': 6700,
        'amount': 1
    }
];

export default offers
