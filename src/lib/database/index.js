import db from './models/index'
import chalk from 'chalk'

/**
 * @name Database-Connection
 */
db.sequelize.authenticate()
  .then(async () => {
    console.log(
      chalk.greenBright(`
${chalk.greenBright(`=================================================`)}
${chalk.whiteBright('Connected :')} ${process.env.DB_NAME} database has been established successfully 
${chalk.greenBright(`=================================================`)}`))
  })
  .catch((err) => {
    console.log(
      chalk.greenBright(`
${chalk.greenBright(`=================================================`)}
${chalk.whiteBright('Connected :')} ${process.env.DB_NAME} database has been established successfully 
${chalk.greenBright(`=================================================`)}`))
  })
