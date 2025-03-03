import { FETCH_INSTRUCTOR_FAILED, FETCH_INSTRUCTOR_REQUEST, FETCH_INSTRUCTOR_SUCCESS } from "./instructionAction"

const initState = {
    isLoading : false,
    isError : false,
    error :"",
    instructor : []
}

export const instructorReducer=(state=initState,{type,payload})=>{
    switch(type){
        case FETCH_INSTRUCTOR_REQUEST :
            return{
                ...state,
                isLoading : true
            }
        case FETCH_INSTRUCTOR_SUCCESS : 
        return{
            ...state,
            isLoading : false,
            instructor : payload
        }
        
        case FETCH_INSTRUCTOR_FAILED :
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