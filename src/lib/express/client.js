import path from 'path';
import fs from 'fs';
import express from 'express'
import favicon from 'serve-favicon';
import { config } from '@yid/config';

export default (app)=> {
  app.get(config.path.disabled,(req,res)=> {
    return res.status(404).sendFile(`${config.base}/views/404.html`)
  })


  // Point static path to client by default
  let client = config.client;
  let file = 'index';


  // If not exits client, when set internal default
  if (!fs.existsSync(config.client)) {
    client = `${config.base}/views/default`;
  }

  app.use(express.static(client));
  // Folder client
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(client,'index.html'));
  });

}