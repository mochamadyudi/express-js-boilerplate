import { config } from '@yid/config'
import chalk from 'chalk'

export default (app, port = undefined)=> {
  app.listen(config.server.port,()=> {
    console.log(
      chalk.greenBright(`
${chalk.greenBright(`=================================================`)}
${chalk.greenBright('mode')}: [ ${chalk.whiteBright.bgCyanBright(`  ${config.mode}  `)} ]
${chalk.greenBright('host')}: ${chalk.whiteBright(`${config.server.host}`)}
${chalk.greenBright('port')}: ${chalk.whiteBright(`${config.server.port}`)}
${chalk.greenBright('url')}: ${chalk.whiteBright(`http://${config.server.host}:${config.server.port}`)}
${chalk.greenBright('boilerplate:')} ${chalk.whiteBright('CORE@2022')}
${chalk.greenBright('Author:')} ${chalk.cyanBright('Mochamad Yudi sobari')}
${chalk.greenBright('Github:')} ${chalk.cyanBright('http://github.com/mochamadyudi')}
${chalk.greenBright(`=================================================`)}`))
})

}