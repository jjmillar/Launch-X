// Este es nuestro modelo

const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page=1) {
    const offset = helper.getOffSet(page, config.listPerPage);
    const rows = await db.query(`
        SELECT * FROM lenguajes_programacion LIMIT ${offSet}, ${config.listPerPage},
    `);

    const data = helper.emptyorRows(rows);
    const metadata = {page};

    return {
        data,
        metadata
    };
};

module.exports = {
    getMultiple
}