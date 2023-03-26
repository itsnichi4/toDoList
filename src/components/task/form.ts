interface TaskForm {
    form:string,
    content:number
}

import {b} from '../../lib/builder';

let el = b('a',{
    children:[],
    addEventListener:[]
}) as HTMLAnchorElement;


export const  form : TaskForm = (options) => {

let form = "test"

let content = 4;

return {
    form,
    content
};
}


let myForm = form({});

myForm