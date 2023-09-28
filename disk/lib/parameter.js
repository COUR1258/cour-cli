"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = void 0;
const fs = require("fs");
const path = require("path");
const textOut_1 = require("./textOut");
const menuSelect_1 = require("./menuSelect");
function removeDir(dir) {
    let files = fs.readdirSync(dir);
    for (var i = 0; i < files.length; i++) {
        let newPath = path.join(dir, files[i]);
        let stat = fs.statSync(newPath);
        if (stat.isDirectory()) {
            //如果是文件夹就递归下去
            removeDir(newPath);
        }
        else {
            //删除文件
            fs.unlinkSync(newPath);
        }
    }
    fs.rmdirSync(dir); //如果文件夹是空的，就将自己删除掉
}
// ? 操作方法
// create 方法
function createProject(projectName, cmd) {
    if (fs.existsSync(projectName)) {
        const { force = false } = cmd;
        if (!force) {
            (0, textOut_1.errorOut)('存在同名文件或文件夹 请添加"-f"参数');
            return;
        }
        removeDir(projectName);
    }
    (0, textOut_1.infoOut)("准备创建项目");
    (0, menuSelect_1.inputSelect)(projectName);
}
exports.createProject = createProject;
