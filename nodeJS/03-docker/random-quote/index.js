const path = require('path');
const fs = require('fs');

const uuid = require('uuid');

let getFileContent = async function (filePath) {
    let fullPath = path.join(__dirname, filePath);
    return new Promise((resolve, reject) => {
        fs.readFile(fullPath, 'utf8', (error, data) => {
            if (error) {
                reject (error);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = async function (context, req) {
    let quotesDB = await getFileContent('quotes.json');

    quotesDB = JSON.parse(quotesDB)
        .map((quote) => {
            quote.uuid = uuid.v4();
            return quote;
        })
        .sort((a, b) => {
            if (a.uuid < b.uuid) {
                return -1;
            }

            if (a.uuid > b.uuid) {
                return 1;
            }

            return 0;
        })

    let quoteOfTheDay = quotesDB[0];

    delete quoteOfTheDay.uuid;

    context.res = {
        body: {
            quote: quoteOfTheDay
        }
    };
};