const express = require('express');
const app = express();
var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);
app.use(express.static('public'));