// ?导入项目
// 艺术字
const figlet = require("figlet")
// 美化工具
const chalk = require('chalk')


// *标志输出
function logoOut(): void {
    const showText = figlet.textSync("cour-cli", {
        font: "bulbhead",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true
    })
    // console.log(`${chalk.green.underline.bold('(•̀ᴗ• )')}`);
    console.log("\r\n" + showText + "\r\n");
}

// *信息输出
function infoOut(msg:string):void{ console.log(`${chalk.blue.underline.bold(msg)}`);}

// *警告输出
function warnOut(msg:string):void{ console.log(`${chalk.yellow.underline.bold('警告：' + msg)}`);}

// *错误输出
function errorOut(msg:string):void{ console.log(`${chalk.red.underline.bold('错误：' + msg)}`);}

export {logoOut,infoOut,warnOut,errorOut}
