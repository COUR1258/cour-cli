declare interface GitConfig {
    name:string,
    gitAddress:string
}

declare interface MenuConfig {
    name: string,
    type: string,
    message: string,
    choices: Array<string>
}

declare interface isSelect {
    [propName:string]:string
}


export {GitConfig,MenuConfig,isSelect}