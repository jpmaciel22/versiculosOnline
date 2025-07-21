async function getAllBooks() {
    const url = 'https://bible-api.com/data/almeida';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data.books;
}

async function getDailyVerse() {
    const url = 'https://bible-api.com/data/almeida/random';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data.random_verse
}

module.exports = { getAllBooks, getDailyVerse }