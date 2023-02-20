const { deleteKey } = require('./serviceUtils');

function prepUserInsert(dataInJSON) {
	const values = dataInJSON.map(eachObj => {
		let arr = '(';
		const tempObj = Object.assign({}, eachObj);
		arr += `'${Object.values(deleteKey(tempObj, 'name')).join(' ')}'`;
		arr += (',' + deleteKey(tempObj, 'age'));
		if (tempObj.address) {
			arr += `, '${JSON.stringify(deleteKey(tempObj, 'address'))}'`;
		}
		arr += `, '${JSON.stringify(Object.assign({}, tempObj))}'`;
		arr += ')';
		return arr;
	});
	return `INSERT INTO users (name,age,address,additional_info) VALUES ${values.join(',')};`;
}

function getAllUsers () {
	const query = `
		SELECT
			CASE
				WHEN age < 20 THEN '< 20'
				WHEN age >= 20 AND age < 40 THEN '20 to 40'
				WHEN age >= 40 AND age < 60 THEN '40 to 60'
				ELSE '> 60'
			END AS age_group,
			ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 2) AS percent,
			COUNT(*) AS count
		FROM users
		GROUP BY age_group
		ORDER BY age_group;`
	return query;
}

module.exports = {
  prepUserInsert,
	getAllUsers
}