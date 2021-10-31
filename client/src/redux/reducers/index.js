import { combineReducers } from "redux";
import videos from './videos'
import customer from './customer'
import dictionarys from './dictionarys'
import modal from './modal'
import comments from './comments'
import blogs from './blogs'

export default combineReducers({

videos,
customer,
dictionarys,
modal,
comments,
blogs,

});