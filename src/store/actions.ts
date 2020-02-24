import {STATE,ADD_NAME,REMOVE_NAME,PICK_RANDOM_NAME,ENTER_NEW_NAME,ActionTypes} from './types';

export function addName(name:string):ActionTypes{
    return{
        type:ADD_NAME,
        payload:name
    }
}
export function removeName(name:string):ActionTypes{
    return{
        type:REMOVE_NAME,
        payload:name
    }
}
export function pickRandomName():ActionTypes{
    return{
        type:PICK_RANDOM_NAME
    }
}
export function enterNewName(name:string):ActionTypes{
    return{
        type:ENTER_NEW_NAME,
        payload:name
    }
}
