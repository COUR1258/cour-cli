"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitBranchPull = void 0;
const download = require("download-git-repo");
const path = require("path");
const gitList_1 = require("../config/gitList");
const textOut_1 = require("./textOut");
function gitBranchPull(projectName, branch) {
    // process.cwd() 获取 Node.js 进程的当前工作目录
    const dir = path.join(process.cwd(), projectName);
    (0, textOut_1.infoOut)(`拉取仓库,分支${branch})`);
    if (branch == "") {
        (0, textOut_1.errorOut)('未知的分支操作');
    }
    else {
        download(`direct:${gitList_1.baseurl}#${branch}`, dir, { clone: true }, function (err) {
            if (err)
                console.log(err);
            err ? (0, textOut_1.errorOut)('拉取出错') : (0, textOut_1.infoOut)('拉取成功');
        });
    }
}
exports.gitBranchPull = gitBranchPull;
