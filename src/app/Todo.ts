export class Todo{
    sno : number
    title : string
    desc : string
    active :boolean

    constructor(code: number, name: string, desc: string, bool: boolean) {  
        this.sno = code;  
        this.title = name;
        this.desc = desc;
        this.active = bool;  
}  
}