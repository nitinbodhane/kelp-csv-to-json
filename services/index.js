require('dotenv').config()
const path = require('path');
const folderLocation = path.resolve(process.env.FOLDER_LOCATION);
const { csvToJson } = require('./serviceUtils');
const { insertData } = require('../database/dbHelper');
const { prepUserInsert, getAllUsers } = require('./dbQueryBuilder');

async function insertCsv2Json (fileName) {
	const fsData = path.parse(fileName);
	const csvFile = path.format({
		dir: folderLocation,
		name: fsData.name,
		ext: '.csv'
	});

	const dataInJSON = await csvToJson(csvFile);

	const query = prepUserInsert(dataInJSON);

	const result = await insertData(query);
	if (result.rowCount === dataInJSON.length)
	console.log('Data inserted successfully');

  // fetch the record from the database and console.table the data
	const userDataQuery = getAllUsers();
	const allUsersDistribution  = await insertData(userDataQuery);
	console.table(allUsersDistribution?.rows)

	return dataInJSON;
}

module.exports = {
	insertCsv2Json
}