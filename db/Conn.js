const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('nodemvc', 'root', 'samuel123', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate();
    console.log('Connected!');
}
catch(error){
    console.log(error);
}

module.exports = sequelize;