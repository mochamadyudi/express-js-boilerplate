import fs from 'fs'
import path from 'path'
import { config } from '@yid/config'
import express from 'express'

const Route = express()
if ('google' in config.oAuth && config.oAuth.google.enabled) {
  //import
}

if ('local' in config.oAuth && config.oAuth.local.enabled) {
  //import
}

export default (app) => {
  /**
   * @description - read api route
   * @version 1
   */
  let routePath = [`v1`, `v2`]
  routePath.map((val) => {
    if (fs.existsSync(path.resolve(config.base, 'api',val))) {
      app.use(`/api/${val}`, Route)
      fs.readdirSync(`${path.resolve(config.base, 'api',val)}`).forEach((route) => {
        require(`${config.base}/api/${val}/${route}`).default(Route)
      })
    }
  })
}