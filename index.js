const books = [
    {
        name: 'book 1',
        author: 'some author 1',
    },
    {
        name: 'book 2',
        author: 'some author 2',
    },
];

let htmlBody = '';
for ( let i = 0; i < books.length; i++ ) {
    for ( let j = 0; j <books[i].values(); j++) {
        htmlBody += '<tr><td>' + books[i].name +  '</td></tr>';
    }

}

document.body.innerHTML = '<table>' + htmlBody + '</table>';
