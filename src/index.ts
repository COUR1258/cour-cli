// ?导入
// commander控制台命令解析工具
import { createProject } from "./lib/parameter";
import { logoOut } from "./lib/textOut";

const program = require("commander");

const VERSION = "1.0.5";

// *输出项目名称
logoOut();

// *判断当前参数

// 配置指令交互相关
program.name("cour-cli").usage("<command> [option]").version(VERSION);

program
    .option("-h, --help", "查看帮助")
    .option("-v, --version", "查看版本")

//   .option('-p, --port <number>', 'port number', 80)
//增加创建指令
program
    .command("create  <project-name>")
    .option('-f, --force', '如果目录存在进行强制覆盖') // 旧版本不支持
    .description("创建一个新项目")
    .action((projectName: string, cmd: any) => {
        createProject(projectName, cmd)
    });