import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server'
import App from '../src/App'

const app = express();

app.use('*',(req,res) => {
    // res.send('server side')
    fs.readFile(path.resolve('./build/index.html'),'utf-8',(err, data) => {
        if(err) {
            console.error(err);
        }
        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        );

        return res.send(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
    })
})

app.listen(3005, () => {
    console.log("app is launched successfully");
})