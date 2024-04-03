var config = require('../dbconfig');
const sql = require('mssql');

async function connection(){
    try {
        let pool = await sql.connect(config);
        return pool;
    } catch (error) {
        return error;
    }
}

async function getData(){
    try {
        let pool = await sql.connect(config);
        // let res = await pool.request().query("SELECT top 2 * from andromaf.dbo.andro_user");
        let res = await pool.request().query("SELECT * from itdept.dbo.promo_jenis");
        return res.recordsets;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    connection : connection,
    getData : getData
}