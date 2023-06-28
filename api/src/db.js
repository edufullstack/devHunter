const { Sequelize } = require('sequelize');
require('dotenv').config()
const {DB_USER, DB_PASSWORD, DB_NAME, } = process.env
const User = require('./models/userModel')


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`,
{
  logging: false,
  native:false
});


User(sequelize)
// const {User } = sequelize.models






module.exports = {sequelize, ...sequelize.models}