require('dotenv').config();
const express = require('express');
const cors = require('cors')
const db = require('./models');
require('express-async-errors');
const appRecipe = express();
const dataBase = require('./models');
const route = require('./routes');
const { main } = require('./mail/main');
const AccessControl = require('express-ip-access-control');
const options = {
	mode: 'allow',
	denys: [],
	allows: [],
	forceConnectionAddress: false,
	log: function(clientIp, access) {
		console.log(clientIp + (access ? ' accessed.' : ' denied.'));
	},

	statusCode: 401,
	redirectTo: '',
	message: 'Unauthorized'
};

appRecipe.use(cors())
dataBase.sequelize.authenticate()
.then(() => console.log('ok'))
.catch((err) => console.log(err))



if (process.env.NODE_ENV === "development") {
    // dataBase.sequelize.sync({alter : { drop: false}});
}
appRecipe.use(express.static('public'));
appRecipe.use(AccessControl(options));

appRecipe.use(express.json())
appRecipe.use('/api', route);
// main.sendMail().catch(console.error)

appRecipe.listen(process.env.PORT, () => { console.log(`PORT : ${process.env.PORT}`);})