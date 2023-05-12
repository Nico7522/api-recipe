require('dotenv').config();
const express = require('express');
const cors = require('cors')
const db = require('./models');
require('express-async-errors');
const appRecipe = express();
const dataBase = require('./models');
const route = require('./routes')
appRecipe.use(cors())
dataBase.sequelize.authenticate()
.then(() => console.log('ok'))
.catch((err) => console.log(err))



if (process.env.NODE_ENV === "development") {
    // dataBase.sequelize.sync({alter : { drop: false}});
    //   dataBase.sequelize.sync({ force: true });
    
}
appRecipe.use(express.static('public'));

appRecipe.use(express.json())
appRecipe.use('/api', route);

appRecipe.listen(process.env.PORT, () => { console.log(`PORT : ${process.env.PORT}`);})