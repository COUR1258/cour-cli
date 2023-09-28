"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputSelect = void 0;
// 命令行交互
const Inquirer = require("inquirer");
const gitpull_1 = require("./gitpull");
const menuList_1 = require("../config/menuList");
const textOut_1 = require("./textOut");
const inputSelect = async function (projectName) {
    const select = await new Inquirer.prompt(menuList_1.MenuListFirst);
    let retSelect = null;
    console.log(select);
    switch (select.type) {
        case "Web":
            retSelect = await new Inquirer.prompt(menuList_1.MenuListWeb);
            (0, gitpull_1.gitBranchPull)(projectName, menuList_1.MenuItemWeb[retSelect.web]);
            break;
        case "Python":
            retSelect = await new Inquirer.prompt(menuList_1.MenuListPython);
            (0, gitpull_1.gitBranchPull)(projectName, menuList_1.MenuItemPython[retSelect.python]);
            break;
        // case "Java":
        default:
            (0, textOut_1.errorOut)("不是我的活");
    }
    console.log(retSelect);
    if (retSelect == null)
        return;
};
exports.inputSelect = inputSelect;
