require('dotenv').config();
const express = require('express');
const db = require('./models');
require('express-async-errors');
const appRecipe = express();
const dataBase = require('./models');
const route = require('./routes')

dataBase.sequelize.authenticate()
        .then(() => console.log('ok'))
        .catch((err) => console.log(err))



if (process.env.NODE_ENV === "development") {
    dataBase.sequelize.sync({alter : { drop: false}});
}

appRecipe.use(express.json())
appRecipe.use('/api', route);

appRecipe.listen(process.env.PORT, () => { console.log(`PORT : ${process.env.PORT}`);})