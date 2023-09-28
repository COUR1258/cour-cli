"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorOut = exports.warnOut = exports.infoOut = exports.logoOut = void 0;
// ?导入项目
// 艺术字
const figlet = require("figlet");
// 美化工具
const chalk = require('chalk');
// *标志输出
function logoOut() {
    const showText = figlet.textSync("cour-cli", {
        font: "bulbhead",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true
    });
    // console.log(`${chalk.green.underline.bold('(•̀ᴗ• )')}`);
    console.log("\r\n" + showText + "\r\n");
}
exports.logoOut = logoOut;
// *信息输出
function infoOut(msg) { console.log(`${chalk.blue.underline.bold(msg)}`); }
exports.infoOut = infoOut;
// *警告输出
function warnOut(msg) { console.log(`${chalk.yellow.underline.bold('警告：' + msg)}`); }
exports.warnOut = warnOut;
// *错误输出
function errorOut(msg) { console.log(`${chalk.red.underline.bold('错误：' + msg)}`); }
exports.errorOut = errorOut;
