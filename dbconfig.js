// const config = {
//     user: 'sa',
//     password: 'Multindo123',
//     database: 'andromaf',
//     server: '192.168.1.3',
//     port: 1433,
//     pool: {
//         max: 10,
//         min: 0,
//         idleTimeoutMillis: 30000
//     },
//     options: {
//         // encrypt: true,
//         enableArithAbort: true,
//         instancename: "",
//         trustServerCertificate: false,
//         trustedConnection: true
//     }
// }

const config = {
    server: '192.168.1.3',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: 'Multindo123'
        }
    },
    options: {
        // encrypt: true,
        trustServerCertificate: true,
        database: 'andromaf'
    }
};
    
// const Connection = require('tedious').Connection;

// const connection = new Connection(config);
// connection.connect();

// connection.on('connect', function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Connected');
//     }
// });

module.exports = config