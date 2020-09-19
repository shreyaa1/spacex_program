
import path from 'path';
import fs from 'fs';

import React from 'react';
const express = require("express");
import ReactDOMServer from 'react-dom/server';

import App from '../App';

const PORT = process.env.PORT || 3000;
const app = express();


const component = (<App />);

app.get('/', (req: any, res: { status: (arg0: number) => { send: (arg0: string) => void; }; send: (arg0: string) => void; }) => {
    const app = ReactDOMServer.renderToString(component);

    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});