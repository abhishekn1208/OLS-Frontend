
import axios from "axios"
export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILED = 'FETCH_FAILED'
export const USER_ROLE = 'USER_ROLE'



export const fetchCourserequest=(payload)=>{
    return{
        type : FETCH_REQUEST
    }
}

export const fetchCoursesuccess=(payload)=>{
    return{
        type : FETCH_SUCCESS,
        payload
    }
}

export const fetchCoursefailed=(payload)=>{
    return{
        type : FETCH_FAILED,
        payload
    }
}

export const fetchcourses=()=>async(dispatch)=>{
    dispatch(fetchCourserequest())

        try {
            let token = localStorage.getItem("token")
        const response = await axios.get('https://ols-backend-arta.onrender.com/api/',{
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        if(response.status===200){
            dispatch(fetchCoursesuccess(response.data))
        }
        } catch (error) {
            dispatch(fetchCoursefailed(error.response?.data?.message))
        }
    }

    export const fetchuserrole=(payload)=>{
        return{
            type : USER_ROLE,
            payload
        }
    }