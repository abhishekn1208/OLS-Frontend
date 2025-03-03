import { FETCH_LECTURE_FAILED, FETCH_LECTURE_REQUEST, FETCH_LECTURE_SUCCESS } from "./lectureAction"

const initState = {
    isLoading : false,
    isError : false,
    error :"",
    lecture : []
}

export const lectureReducer=(state=initState,{type,payload})=>{
    switch(type){
        case FETCH_LECTURE_REQUEST :
            return{
                ...state,
                isLoading : true
            }
        case FETCH_LECTURE_SUCCESS : 
        return{
            ...state,
            isLoading : false,
            lecture : payload
        }
        
        case FETCH_LECTURE_FAILED :
            return{
                ...state,
                isLoading : false,
                isError : true,
                error : payload
            }
        default :
        return state
        
    }
}