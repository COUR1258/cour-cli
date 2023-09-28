import { MenuConfig, isSelect } from "../cour.types";

const MenuListFirst: MenuConfig = {
    name: "type",
    type: "list",
    message: "选择创建项目",
    choices: ["Web", "Python"],
};

const MenuListWeb: MenuConfig = {
    name: "web",
    type: "list",
    message: "选择创建的项目",
    choices: ["No", "uni-h5", "electron-vite"],
};

const MenuListPython: MenuConfig = {
    name: "python",
    type: "list",
    message: "选择创建的项目",
    choices: ["No", "Flask", "spader"],
};

const MenuItemWeb: isSelect = {
    "No": "",
    "uni-h5": "template-uni-h5",
    "electron-vite": "template-vite-electron"
};

const MenuItemPython: isSelect = {
    "No": "",
    "Flask": "",
    "spader": "",
};

export { MenuListFirst, MenuListWeb, MenuListPython,MenuItemWeb,MenuItemPython };