require("dotenv").config();

module.exports = {
    development: {
        username: process.env.USER_DB,
        password: process.env.PASS_DB,
        database: process.env.NAME_DB,
        host: process.env.HOST_DB,
        dialect: "mysql",
    },
    test: {
        username: process.env.USER_DB,
        password: process.env.PASS_DB,
        database: process.env.NAME_DB,
        host: process.env.HOST_DB,
        dialect: "mysql",
    },
    production: {
        username: process.env.USER_DB,
        password: process.env.PASS_DB,
        database: process.env.NAME_DB,
        host: process.env.HOST_DB,
        dialect: "mysql",
    },
};
