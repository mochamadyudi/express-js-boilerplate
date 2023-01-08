import fs from 'fs'
import express from 'express'
import path from 'path'
import { config } from '@yid/config'

/**
 * view engine
 * @param app
 * @constructor
 */
function indexRoute(app){
  app.set('views', path.join(config.base, 'views', 'pug-engine'));
  app.set('view engine', 'pug');
  app.get('/', async (req, res) => {
    res.status(200)
    return res.render('index', {
      app: {
        name: process.env.APP_NAME || 'YID'
      },
      meta: {
        title: 'home'
      },
      title: 'Core ExpressJS 2023',
      message: 'Lorem ipsum dolor sit amet'
    })
  })
}

/**
 * static
 * @param app
 * @constructor
 */
function ViewStatic(app) {
  let client = config.client;

  if (!fs.existsSync(config.client)) {
    client = `${config.base}/views/default`;
  }
  if (typeof (process.env.APP_VIEW_STATIC_FILE) !== 'undefined' && process.env.APP_VIEW_STATIC_FILE) {
    app.use(express.static(client));
    app.get('/*', (req, res) => {
      return res.sendFile(path.resolve(client, process.env.APP_VIEW_STATIC_FILE));
    })
  }
}
export default (app)=> {

  /**
   * path disabled
   */
  app.get(config.path.disabled, (req, res) => {
    if (res.statusCode === 400) {
      return res.status(400).sendFile(`${config.base}/views/400.html`)
    }
    return res.status(404).sendFile(`${config.base}/views/404.html`)
  })

  if (typeof (process.env.APP_VIEW_MODE) !== 'undefined') {
    switch (process.env.APP_VIEW_MODE) {
      case "engine":
        new indexRoute(app)
        break;
      case "static":
      default:
        new ViewStatic(app)
        break;
    }
  }
}