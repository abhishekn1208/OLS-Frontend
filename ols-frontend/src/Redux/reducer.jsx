import { FETCH_FAILED, FETCH_REQUEST, FETCH_SUCCESS, USER_ROLE } from "./Action"

const initState = {
    courses : [],
    isLoading : false,
    isError : false,
    error : "",
    userRole : "",
}

export const courseReducer=(state=initState,{type,payload})=>{
    switch(type){
        case FETCH_REQUEST :
            return{
                ...state,
                isLoading : true
            }
        case FETCH_SUCCESS :
            return{
                ...state,
                courses : payload,
                isLoading : false,

            }
        case FETCH_FAILED :
            return{
                ...state,
                isError : true,
                error : payload,
                isLoading : false
            }

        case USER_ROLE :
            return{
                ...state,
                userRole : payload
            }
         default :
            return state
    }
}