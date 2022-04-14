const path = require('path');
const express = require('express');
const os = require('os');
const app = express();
const dir = path.join(__dirname, './');

app.set('views', dir);

app.get('', (req, res) => {
    const os = require('os');
    const ip = require('ip');
    const usertest = os.userInfo();
    const user = usertest.username;
    res.render('index.hbs', {

        'hostname': os.hostname(),
        'Ip': ip.address(),
        'user': user


    });

})



app.listen(2001);