'use strict';

exports.keys = 'janden_cookie';

exports.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'laradmin',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
};

config.redis = { 
    client: { 
        port: 6379, // Redis port 
        host: '127.0.0.1', // Redis host 
        password: '', 
        db: 2, 
    }, 
}