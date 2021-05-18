let getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
}
const getBooks = () => {
    fetch("https://diagnostic-thirsty-ptarmigan.glitch.me/books", getOptions)
        .then(resp => resp.json())
        .then(books => {
            console.log(books);
            let htmlStr = "";
            for (let book of books) {
                htmlStr = `${htmlStr}<h1>${book.title}</h1><p>by: ${book.author.firstName} ${book.author.lastName}</p>`
            }
            $('#container').html(htmlStr)
        })
}

fetch("https://diagnostic-thirsty-ptarmigan.glitch.me/books/1", getOptions) //Makes reference to just 1 book
    .then(resp => resp.json())
    .then(book => console.log(book));

//POST This will add items to object
let newBook = {
    "title": "Percy Jackson & The Lightning Thief",
    "author": {
        "firstName": "Rick",
        "lastName": "Ricordan"
    }
};

let postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
}
$("#addPercy").click(() => {
    fetch("https://diagnostic-thirsty-ptarmigan.glitch.me/books", postOptions)
        .then(getBooks)
});

//PUT
let putThis = {
    "title": "Percy Jackson & the Sea of Monsters",
    "author": {
        "firstName": "Rick",
        "lastName": "Ricordan"
    }
}

let putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(putThis),
}
fetch("https://diagnostic-thirsty-ptarmigan.glitch.me/books/9", putOptions).then(getBooks)

//PATCH
let patchThis = {
    "title": "Percy Jackson & the Titans Curse"
}

let patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchThis),
}
fetch("https://diagnostic-thirsty-ptarmigan.glitch.me/books/7", patchOptions).then(getBooks)

//DELETE

let deleteOptions = {
    method: 'DELETE',
    Headers: {
        'Content-Type': 'application/json',
    }
};

fetch("https://diagnostic-thirsty-ptarmigan.glitch.me/books/6", deleteOptions).then(getBooks)

//Delete Button Functionality
$("#uniqueBooks").click(() => {
    let inputVal = $('#id-to-delete').val();
    fetch(`https://diagnostic-thirsty-ptarmigan.glitch.me/books/${inputVal}`, deleteOptions).then(getBooks)
})


//white_check_mark
//run-fer
//raised_hands