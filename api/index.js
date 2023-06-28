const app = require('./src/app')
const {sequelize} = require('./src/db')

sequelize.sync({force: false}).then(()=>{
  app.listen(3001, ()=>{
    console.log('escuchando en 3001')
  })
})