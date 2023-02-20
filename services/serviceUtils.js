const fs = require('fs');
const csv = require('csv-parser');

function csvToJson(filePath) {
  const results = [];
  return new Promise((resolve, reject) => {
		fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => {
			const convertedObj = convertToNestedObject(data);
			results.push(convertedObj)
		})
    .on('end', () => {
      resolve(results);
    });
	});
}

function convertToNestedObject(obj) {
  const finalObj = {};
  for (const key in obj) {
    key.split('.').reduce((acc, current, index, arr) => {
      if (index === arr.length - 1) {
        acc[current] = obj[key];
      } else {
        acc[current] = acc[current] || {};
      }
      return acc[current];
    }, finalObj);
  }

  return finalObj;
}


function deleteKey(obj, key) {
	const response = obj[key];
  for (let prop in obj) {
    if (prop === key) {
      delete obj[prop];
    } else if (typeof obj[prop] === 'object') {
      deleteKey(obj[prop], key);
    }
  }
	return response;
}

module.exports = {
	csvToJson,
	deleteKey
}
