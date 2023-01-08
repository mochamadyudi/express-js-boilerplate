import 'dotenv/config';
import express from 'express';
import db from './lib/database/models'

const app = express();

(async function run(){

    if(Array.isArray(process.argv) && process.argv.filter((item)=> item === '--init').length > 0 ){
        await require('../app/init');
    }

    await require('./lib/helper/index');

    /**
     * @title - pattern express
     */
    await require('./lib/express').default(app);

    await require('./routes').default(app)


    /**
     * @title - handler
     */
    await require('./lib/handler').default(app)

    /**
     * @name Database-Connected
     */
    await require('./lib/database/index')

    /**
     * STATIC
     */

    /**
     * @default - listener
     * @description app listener change port here
     */
    await require('./lib/express/listen').default(app)
})()