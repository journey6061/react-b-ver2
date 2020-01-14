import * as actionType from './action';

const initialState={
    ingradien:{
        custom1:0,
        custom2:0,
        custom3:0
    },
    baseprice:0,
}

const reducer=( state=initialState, action)=>{
    switch(action.type){
        case actionType.ADD_INGRAD:
        return{
            ...state,
            ingradien:{
                ...state.ingradien,
                [action.ingName]:state.ingradien[action.ingName]+1
            }

        }
        case actionType.DEL_INGRAD:
        return{
            ...state,
            ingradien:{
                ...state.ingradien,
                [action.ingName]:state.ingradien[action.ingName]-1
            }

        }
        default:
            return state;
        
    }
    

}


export default reducer;