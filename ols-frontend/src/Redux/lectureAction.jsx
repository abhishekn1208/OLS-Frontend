import axios from "axios"

export const FETCH_LECTURE_REQUEST = 'FETCH_LECTURE_REQUEST'
export const FETCH_LECTURE_SUCCESS = 'FETCH_LECTURE_SUCCESS'
export const FETCH_LECTURE_FAILED = 'FETCH_LECTURE_FAILED'

export const fetchLectureRequest=()=>{
    return{
        type : FETCH_LECTURE_REQUEST
    }
}

export const fetchLectureSuccess=(payload)=>{
    return{
        type : FETCH_LECTURE_SUCCESS,
        payload
    }
}

export const fetchLectureFailed=(payload)=>{
    return{
        type : FETCH_LECTURE_FAILED,
        payload
    }
}

export const fetchLecture=()=>async(dispatch)=>{
    dispatch(fetchLectureRequest())
    try {
        let token = localStorage.getItem("token")
     
        const response = await axios.get('https://ols-backend-arta.onrender.com/api/lecture',{
            headers : {
                Authorization : `Bearer ${token}`
            }
            
        })
        if(response.status===200){
               dispatch(fetchLectureSuccess(response.data))
        }
    } catch (error) {
        dispatch(fetchLectureFailed(error.response?.data?.message))
    }
}