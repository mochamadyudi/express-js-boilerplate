const { exec } = require('node:child_process')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

function bootstrap(){
    let pathPublic =path.resolve(__dirname,'..','public')
    if (!fs.existsSync(pathPublic)) {
        exec('mkdir "public/uploads"',(err)=> {
            if(err) process.exit(1)
            console.log(
                chalk.blueBright('====> Create : Folder public/uploads')
            )
        })
    }
    exec('mkdir "storage/uploads"',(err)=> {
        if(err) process.exit(1)
        console.log(
            chalk.blueBright('====> Create : Folder storage/uploads')
        )
    })
}
bootstrap();
