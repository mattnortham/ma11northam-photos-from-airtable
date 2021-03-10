require('dotenv').config();
const Airtable = require('airtable');
let base = new Airtable({ apiKey: process.env.KEY }).base('appGDzjg5NPKFvJjZ');

module.exports = () => {
  return new Promise((resolve, reject) => {
    let allDatasets = [];
      base('All photos') 
        .select({ view: 'Grid view' }) 
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach((record) => {
              allDatasets.push({
                "id" : record._rawJson.id,
                ...record._rawJson.fields
              });
            });
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              reject(err)
            } else {
              resolve(allDatasets);
            }
          }
        );
      });
    };