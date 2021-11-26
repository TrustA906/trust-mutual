const download = require('download-git-repo');
const inquirer = require('inquirer');
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');
const promptList = require('./promptList');

module.exports = (projectName) => {
    //package.json配置
    const changePackageJson = (projectName, answers) => {
        const fileName = `${projectName}/package.json`;
        if (fs.existsSync(fileName)) {
            const content = fs.readFileSync(fileName).toString();
            var obj = JSON.parse(content);
            obj.name = projectName;
            obj.dependencies[answers.features] =`^${answers.frameVersion}.0.11`
            fs.writeFileSync(fileName, JSON.stringify(obj, null, 2), (err) => {
                console.log(err ? err : '')
            });
        }
    }
    //项目基本架构下载
    const downloadFramework = (url, projectName, spinner, answers) => {
        download(url, projectName, {clone: true}, function (err) {
            if (err) {
                console.log(err)
            } else {
                spinner.succeed(chalk.green("download template success"));
                changePackageJson(projectName, answers);
                spinner.stop();
            }
            process.exit();
        })
    }
    // 文件名是否存在
    const isFileExist = (name) => {
        return new Promise((resolve) => {
            if (fs.existsSync(name)) {//判断当前文件夹里面文件夹名是否重复
                console.log(chalk.red('文件夹名已被占用，请更换名字重新创建'))
            } else {
                resolve();
            }
        });
    }
    const templateUrlVue = (answers,projectName,spinner)=>{//template路径
        let url = ''
        if(answers.terminal === 'PC'){
            url = `direct:http://10.139.48.95/cdm/cdm_mng.git`
        }else {
            url = `direct:http://10.139.48.95/cdm/cdm_mng.git`
        }
        downloadFramework(url, projectName, spinner, answers)
    }
    const templateUrlReact = (answers,projectName,spinner)=>{//template路径
        let url = ''
        if(answers.terminal === 'PC'){
            url = `direct:http://10.139.48.95/standard/redux-pc.git`
        }else {
            url = `direct:http://10.139.48.95/standard/standard_mobile.git`
        }
        downloadFramework(url, projectName, spinner, answers)
    }
    isFileExist(projectName).then(() => {
        inquirer.prompt(promptList).then(answers => {
            console.log(answers);
            const text = 'downloading' + answers.template + ' template...';
            const spinner = ora(text).start();
            spinner.color = 'yellow';
            spinner.text = text;
            switch (answers.features) {
                case "vue":
                    templateUrlVue(answers,projectName,spinner)
                    break;
                case "react":
                    templateUrlReact(answers,projectName,spinner)
                    break;
                default:
                    break;
            }
        })
    })
}
