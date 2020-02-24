import {STATE,ADD_NAME,REMOVE_NAME,PICK_RANDOM_NAME,ENTER_NEW_NAME,ActionTypes} from './types';

const initialState : STATE = {
    names:[],
    choosenName:'',
    addedName:''
}

export function nameReducer(
    state = initialState,
    action:ActionTypes
):STATE{
    switch(action.type){
        case ADD_NAME:
            return{
                names:[...state.names,action.payload],
                choosenName:state.choosenName,
                addedName:''
            }
        case REMOVE_NAME:
            let names = state.names;
            const index = names.indexOf(action.payload);
            if (index > -1) {
                names.splice(index, 1);
              }
            return{
                names:[...names],
                choosenName:state.choosenName,
                addedName:''
            }
        case PICK_RANDOM_NAME:
            const getRandomName =(max:number) =>{
                let index = Math.floor(Math.random() * Math.floor(max));
                return state.names[index];
              }
            return{
                names:[...state.names],
                choosenName:getRandomName(state.names.length),
                addedName:''
            }
        case ENTER_NEW_NAME:
            return {
                names:[...state.names],
                choosenName:state.choosenName,
                addedName:action.payload
            }
        default:
            return initialState;
    }
}
