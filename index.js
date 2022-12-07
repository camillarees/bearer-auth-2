'use strict';

require('dotenv').config();

const { start } = require('./src/server');
const { sequelize } = require('./src/auth/models');

sequelize.sync()
  .then(() => {
start(process.env.PORT);
console.log('successful connection');
  })
  .catch(e => console.error(e));