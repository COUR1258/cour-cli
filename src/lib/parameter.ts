const fs = require("fs");
const path = require("path");

import { infoOut, warnOut, errorOut } from "./textOut";


import {inputSelect} from './menuSelect'


function removeDir(dir: string) {
    let files = fs.readdirSync(dir);
    for (var i = 0; i < files.length; i++) {
        let newPath = path.join(dir, files[i]);
        let stat = fs.statSync(newPath);
        if (stat.isDirectory()) {
            //如果是文件夹就递归下去
            removeDir(newPath);
        } else {
            //删除文件
            fs.unlinkSync(newPath);
        }
    }
    fs.rmdirSync(dir); //如果文件夹是空的，就将自己删除掉
}

// ? 操作方法
// create 方法
function createProject(projectName:string, cmd:any) {
    if (fs.existsSync(projectName)) {
        const { force = false } = cmd;

        if (!force) {
            errorOut('存在同名文件或文件夹 请添加"-f"参数');
            return;
        }

        removeDir(projectName);
    }

    infoOut("准备创建项目");
    inputSelect(projectName);
}



export {createProject}