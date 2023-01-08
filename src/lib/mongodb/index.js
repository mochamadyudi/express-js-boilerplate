import mongodb from 'mongoose'
import 'dotenv/config'
import chalk from 'chalk'

const url = process.env.DB_URI

const connectDB = async function(){
  try{
    await mongodb.connect(url, {
      dbName: process.env.MONGODB_NAME || 'skripsi',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=> {
      console.log(
        chalk.greenBright(`
${chalk.greenBright(`=================================================`)}
${chalk.whiteBright('Connected :')} ${process.env.MONGODB_NAME} database has been established successfully 
${chalk.greenBright(`=================================================`)}`))
    })
      .catch((err) => {
        console.log(
          chalk.greenBright(`
${chalk.greenBright(`=================================================`)}
${chalk.whiteBright('Connected :')} ${process.env.MONGODB_NAME} database has been established successfully 
${chalk.greenBright(`=================================================`)}`))
      })
  }catch(err){
    console.error(err.message)
    process.exit(1)
  }
}
export default connectDB