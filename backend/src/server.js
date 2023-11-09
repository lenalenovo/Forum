const app = require('./app');
require('dotenv').config();

app.listen(process.env.SERVER_PORT, () => console.log(`Running at port ${ process.env.SERVER_PORT }`));