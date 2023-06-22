require('dotenv').config();
const express = require('express');
const cors = require('cors')
const db = require('./models');
require('express-async-errors');
const appRecipe = express();
const dataBase = require('./models');
const route = require('./routes');
const { main } = require('./mail/main');
const helmet = require('helmet')



appRecipe.use(cors())
dataBase.sequelize.authenticate()
.then(() => console.log('ok'))
.catch((err) => console.log(err))

appRecipe.use(
    // not loading the noSniff() middleware
    helmet({
      noSniff: false,
    })
  )

if (process.env.NODE_ENV === "development") {
    // dataBase.sequelize.sync({alter : { drop: false}});
    // dataBase.sequelize.sync()
}

appRecipe.use(express.json())
appRecipe.use(express.static('public'));
appRecipe.use('/api', route);
// main.sendMail().catch(console.error)

appRecipe.listen(process.env.PORT, () => { console.log(`PORT : ${process.env.PORT}`);})