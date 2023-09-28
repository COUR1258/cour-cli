"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemPython = exports.MenuItemWeb = exports.MenuListPython = exports.MenuListWeb = exports.MenuListFirst = void 0;
const MenuListFirst = {
    name: "type",
    type: "list",
    message: "选择创建项目",
    choices: ["Web", "Python"],
};
exports.MenuListFirst = MenuListFirst;
const MenuListWeb = {
    name: "web",
    type: "list",
    message: "选择创建的项目",
    choices: ["No", "uni-h5", "electron-vite"],
};
exports.MenuListWeb = MenuListWeb;
const MenuListPython = {
    name: "python",
    type: "list",
    message: "选择创建的项目",
    choices: ["No", "Flask", "spader"],
};
exports.MenuListPython = MenuListPython;
const MenuItemWeb = {
    "No": "",
    "uni-h5": "template-uni-h5",
    "electron-vite": "template-vite-electron"
};
exports.MenuItemWeb = MenuItemWeb;
const MenuItemPython = {
    "No": "",
    "Flask": "",
    "spader": "",
};
exports.MenuItemPython = MenuItemPython;
