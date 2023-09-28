const download = require("download-git-repo");
const path = require("path");

import { baseurl } from "../config/gitList";
import { errorOut, infoOut } from "./textOut";


function gitBranchPull (projectName:string, branch:string){
    // process.cwd() 获取 Node.js 进程的当前工作目录
    const dir = path.join(process.cwd(), projectName);
    infoOut(`拉取仓库,分支${branch})`)
    if (branch==""){
        errorOut('未知的分支操作')
    }else{
        download(`direct:${baseurl}#${branch}`,
            dir,
            { clone: true },
            function (err:any) {
                if(err)console.log(err)

                err ? errorOut('拉取出错') : infoOut('拉取成功')

            })
    }

}
export {gitBranchPull}