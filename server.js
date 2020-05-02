const express = require('express');
const path = require('path');
const nameApp = process.env.npm_package_name;
const app = express();
 
app.use(express.static(`${__dirname}/dist/${nameApp}`));
 
app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${nameApp}/index.html`));
});
 
app.listen(process.env.PORT || 8080); 