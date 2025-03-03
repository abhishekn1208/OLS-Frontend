import axios from "axios"

export const FETCH_INSTRUCTOR_REQUEST = 'FETCH_INSTRUCTOR_REQUEST'
export const FETCH_INSTRUCTOR_SUCCESS = 'FETCH_INSTRUCTOR_SUCCESS'
export const FETCH_INSTRUCTOR_FAILED = 'FETCH_INSTRUCTOR_FAILED'

export const fetchInstructorRequest=()=>{
    return{
        type : FETCH_INSTRUCTOR_REQUEST
    }
}

export const fetchInstructorSuccess=(payload)=>{
    return{
        type : FETCH_INSTRUCTOR_SUCCESS,
        payload
    }
}

export const fetchInstructorFailed=(payload)=>{
    return{
        type : FETCH_INSTRUCTOR_FAILED,
        payload
    }
}

export const fetchInstructor=()=>async(dispatch)=>{
    dispatch(fetchInstructorRequest())
    try {
        let token = localStorage.getItem("token")

        const response = await axios.get('https://ols-backend-arta.onrender.com/api/allinstructor',{
            headers : {
                Authorization : `Bearer ${token}`
            }
            
        })
        if(response.status===200){
               dispatch(fetchInstructorSuccess(response.data))
        }
    } catch (error) {
        dispatch(fetchInstructorFailed(error.response?.data?.message))
    }
}