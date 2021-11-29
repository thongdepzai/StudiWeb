import { combineReducers } from "redux";
import videos from './videos'
import customer from './customer'
import dictionarys from './dictionarys'
import modal from './modal'
import comments from './comments'
import blogs from './blogs'
import quizs from './quizs'
import mycourses from './mycourses'

export default combineReducers({

videos,
customer,
dictionarys,
modal,
comments,
blogs,
quizs,
mycourses,

});