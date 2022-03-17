const booksAction = [
    {
        name: 'Action Book 1',
        author: 'Some Author 1',
        image: 'img.png'
    },
    {
        name: 'Action Book 2',
        author: 'Some Author 2',
        image: 'img_1.png'
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

const renderLabelValue = (label, value) => `
    <div>
        <span class="label">${label}</span>
        <span class="label-text">${value}</span>
    </div>

`

const renderBookFigure = (bookParam) => ` 
        <figure class="fig-book">
            <img src="/img/books/${bookParam.image}" alt="Book Image"/>
            <figcaption>
                ${renderLabelValue('Name', bookParam.name)}
                ${renderLabelValue('Author', bookParam.author)}
            </figcaption>
        </figure>
    `;

function renderTable(bookParam) {
    if (bookParam.length === 0) {
        console.error('Books has an unexpected size of 0');
        return;
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

document.body.innerHTML = `
        ${booksAction.map(book => `
            <div class="d-inline mr-2 ">
                ${renderBookFigure(book)}
            </div>
       `).join('')}
`;




