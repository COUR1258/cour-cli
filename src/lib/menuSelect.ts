// 命令行交互
const Inquirer = require("inquirer");
import { gitBranchPull } from "./gitpull";

import {
    MenuListFirst,
    MenuListWeb,
    MenuListPython,
    MenuItemWeb,
    MenuItemPython,
} from "../config/menuList";
import { MenuConfig } from "../cour.types";
import { errorOut, infoOut } from "./textOut";

const inputSelect = async function (projectName: string) {
    const select = await new Inquirer.prompt(MenuListFirst);
    let retSelect = null;
    console.log(select);
    switch (<string>select.type) {
        case "Web":
            retSelect = await new Inquirer.prompt(MenuListWeb);
            gitBranchPull(projectName, MenuItemWeb[retSelect.web]);
            break;
        case "Python":
            retSelect = await new Inquirer.prompt(MenuListPython);
            gitBranchPull(projectName, MenuItemPython[retSelect.python]);
            break;
        // case "Java":
        default:
            errorOut("不是我的活");
    }
    console.log(retSelect);
    if (retSelect == null) return;
};

export { inputSelect };