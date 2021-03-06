const { exec } = require('child_process')
const chalk = require('chalk')

const move = (filter, path, dest) => {
    exec(`ls -a | grep ${filter}`, {cwd: `${path}`}, (error, stdout, stderr) => {

        if(stderr){
            return stderr;
        }

        const lines = stdout.split(/\n/);
        
        for (i = 0; i < lines.length; i++) {

            if (i < lines.length - 1) {
                let files = []
                files.push(lines[i])

                exec(`mv ${lines[i]} ${dest}`, { cwd: path }, (error, stdout, stderr) => {
                    if(error){
                        return error
                    }
                })

                for(n = 0; n < files.length; n++){
                    console.log(`[+] ${files[n]}\t---->\t${chalk.green(`${dest}`)}`)
                }
            }
        }
    })
}

module.exports = {
    move
}