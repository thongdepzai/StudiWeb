import {takeLatest , call, put,take,takeEvery } from "redux-saga/effects"
import * as actions from '../actions'
import * as api from '../../api'

function* fetchVideoSaga(action){
   try {

    const videos = yield call(api.fetchVideo);
    // console.log('[video]',videos)
    yield put(actions.getVideos.getVideosSuccess(videos.data));
       
   } catch (error) {
       console.log(error)
       yield put(actions.getVideos.getVideosFailure(error))
       
   }


}

function* postCustomerSaga(action){
    try {
        const customer = yield call(api.createCustomer, action.payload);
        yield put(actions.postCustomer.postCustomersSuccess(customer));
    } catch (error) {
        console.log(error)
        yield put(actions.postCustomer.postCustomersFailure(error))
        
    }
}


function* getLoginSaga(action){
    try {
        const login = yield call(api.getLogin )
        yield put(actions.getLogin.getLoginSuccess(login.data))
    } catch (error) {
        yield put(actions.getLogin.getLoginFailure(error))
        
    }
}



function* fetchDictionarySaga(action){
    try {
 
     const dictionary = yield call(api.fetchDictionary);
    //  console.log('[video]',dictionary)
     yield put(actions.getDictionary.getDictionarysSuccess(dictionary.data));
        
    } catch (error) {
        console.log(error)
        yield put(actions.getDictionary.getDictionarysFailure(error))
        
    }
 
 
 }


 function* fetchCommentSaga(action){
    try {
 
     const comments = yield call(api.ferchComment);
     yield put(actions.getComments.getCommentsSuccess(comments.data));
        
    } catch (error) {
        console.log(error)
        yield put(actions.getComments.getCommentsFailure(error))
        
    }
 
 
 }


 function* createCommentSaga(action){
    try {
        const comment = yield call(api.createComment, action.payload);
        yield put(actions.createComments.createCommentsSuccess(comment));
    } catch (error) {
        console.log(error)
        yield put(actions.createComments.createCommentsFailure(error))
        
    }
}

function* deleteCommentSaga(action){
    try {
        const comment = yield call(api.deleteComment, action.payload);
        yield put(actions.deleteComments.deleteCommentsSuccess(comment));
    } catch (error) {
        console.log(error)
        yield put(actions.deleteComments.deleteCommentsFailure(error))
        
    }
}

function* updateCommentSaga(action){
    try {
        const comment = yield call(api.updateComment, action.payload);
        yield put(actions.updateComments.updateCommentsSuccess(comment));
    } catch (error) {
        console.log(error)
        yield put(actions.updateComments.updateCommentsFailure(error))
        
    }
}

function* fetchBlogSaga(action){
    try {
 
     const blog = yield call(api.fetchBlog);
     yield put(actions.getBlogs.getBlogsSuccess(blog.data));
        
    } catch (error) {
        console.log(error)
        yield put(actions.getBlogs.getBlogsFailure(error))   
    }
 }

 function* createBlogSaga(action){
    try {
        const blog = yield call(api.createBlog, action.payload);
        yield put(actions.createBlogs.createBlogsSuccess(blog));
    } catch (error) {
        console.log(error)
        yield put(actions.createBlogs.createBlogsFailure(error))
        
    }
}

function* fetchQuizSaga(action){
    try {
 
     const quiz = yield call(api.fetchQuiz);
     console.log('[quiz]',quiz)
     yield put(actions.getQuizs.getQuizsSuccess(quiz.data));
        
    } catch (error) {
        console.log(error)
        yield put(actions.getQuizs.getQuizsFailure(error))   
    }
 }


 function* fetchMyCourseSaga(action){
    try {
 
     const mycourses = yield call(api.fetchMyCourse);
     console.log('[quiz]',mycourses)
     yield put(actions.getMyCourse.getMyCoursesSuccess(mycourses.data));
        
    } catch (error) {
        console.log(error)
        yield put(actions.getMyCourse.getMyCoursesFailure(error))   
    }
 }



 function* editCustomerSaga(action){
    try {
        const customer = yield call(api.editCustomer, action.payload);
        yield put(actions.editCustomer.editCustomersSuccess(customer));
    } catch (error) {
        console.log(error)
        yield put(actions.editCustomer.editCustomersFailure(error))
        
    }
}


function* mySaga(){

yield takeLatest(actions.getVideos.getVideosRequest, fetchVideoSaga)              
yield takeLatest(actions.postCustomer.postCustomersRequest,postCustomerSaga )
yield takeLatest(actions.getLogin.getLoginRequest, getLoginSaga)
yield takeLatest(actions.getDictionary.getDictionarysRequest, fetchDictionarySaga)              
yield takeLatest(actions.getComments.getCommentsRequest, fetchCommentSaga)  

yield takeLatest(actions.createComments.createCommentsRequest, createCommentSaga)              
yield takeLatest(actions.deleteComments.deleteCommentsRequest, deleteCommentSaga)              
yield takeLatest(actions.updateComments.updateCommentsRequest, updateCommentSaga)  

yield takeLatest(actions.getBlogs.getBlogsRequest, fetchBlogSaga)              
yield takeLatest(actions.createBlogs.createBlogsRequest, createBlogSaga)      
yield takeLatest(actions.getQuizs.getQuizsRequest, fetchQuizSaga)              
yield takeLatest(actions.getMyCourse.getMyCoursesRequest, fetchMyCourseSaga)              
yield takeLatest(actions.editCustomer.editCustomersRequest, editCustomerSaga)              




//action cuoi dung duoc su li cancle all

}



//generator function ES6

export default mySaga;