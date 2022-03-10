const booksAction = [
    {
        name: 'Action Book 1',
        author: 'Some Author 1',
    },
    {
        name: 'Action Book 2',
        author: 'Some Author 2',
    },
];

const booksAdventure = [
    {
        name: 'Adenture Book 1',
        author: 'Some Author 1',
    },
    {
        name: 'Adventure Book 2',
        author: 'Some Author 2',
    },
];

function renderTable(bookParam) {
    if (bookParam.length === 0) {
        console.error('Books has an unexpected size of 0');
        return ;
    }
    ;

    //render the html table body tag
    let htmlBody = '';
    //the for loops serve as an activator for the table
    for (let i = 0; i < bookParam.length; i++) {
        const book = bookParam[i];
        const bookArray = Object.values(book);

        htmlBody += '<tr>'
        for (let j = 0; j < bookArray.length; j++) {
            htmlBody += `<td>${bookArray[j]}</td>`;
        }
        htmlBody += '</tr>';
    }

    //render the html table head tag
    let htmlHead = '';

    const book = bookParam[0] ?? {};
    const bookArray = Object.keys(book);

    //this creates a row first and then creates the headings inside of the row.
    htmlHead += '<tr>'
    for (let j = 0; j < bookArray.length; j++) {
        htmlHead += `<th>${bookArray[j]}</th>`;
    }
    htmlHead += '</tr>'

    return `<table class="table-book"><thead class="table-book-head">${htmlHead}   </thead><tbody>${htmlBody}   </tbody></table>`;


}

document.body.innerHTML = `<div class="d-inline mr-2">${renderTable(booksAction)}</div> <div class="d-inline">${renderTable(booksAdventure)}</div>`;




