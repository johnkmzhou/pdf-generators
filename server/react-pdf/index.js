const express = require('express');
const cors = require('cors');

import { Doc } from '../../client/react-pdf/src/Doc';

const app = express();
app.use(cors());

app.get('/pdf', (req, res) => {
    
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Listening on port " + port));