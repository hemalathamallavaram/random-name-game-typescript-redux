export interface STATE{
    names:string[],
    choosenName:string,
    addedName:string
}
export const ADD_NAME='ADD_NAME';
export const REMOVE_NAME='REMOVE_NAME';
export const PICK_RANDOM_NAME='PICK_RANDOM_NAME';
export const ENTER_NEW_NAME='ENTER_NEW_NAME';
interface AddNameAction{
    type:typeof ADD_NAME
    payload:string
}
interface RemoveNameAction{
    type: typeof REMOVE_NAME
    payload:string
}
interface PickRandomNameAction{
    type:typeof PICK_RANDOM_NAME
}
interface EnterNewNameAction{
    type:typeof ENTER_NEW_NAME,
    payload:string
}
export type ActionTypes = AddNameAction | RemoveNameAction | PickRandomNameAction | EnterNewNameAction