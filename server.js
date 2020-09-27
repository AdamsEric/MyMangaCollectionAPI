const express = require('express');
const cors = require('cors');

const routes = require('./src/routes/routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.listen(process.env.PORT || 3088);