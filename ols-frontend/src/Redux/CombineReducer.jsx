import { combineReducers } from "redux";
import { courseReducer } from "./reducer";
import { instructorReducer } from "./InstructorReducer";
import { lectureReducer } from "./lectureReducer";


const rootReducer = combineReducers({
    course : courseReducer,
    instructor : instructorReducer,
    lecture : lectureReducer
})

export default rootReducer;