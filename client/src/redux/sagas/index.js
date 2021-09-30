import {takeLatest , call, put } from "redux-saga/effects"
import * as actions from '../actions'
import * as api from '../../api'

function* fetchVideoSaga(action){
   try {

    const videos = yield call(api.fetchVideo);
    console.log('[video]',videos)
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


function* mySaga(){

yield takeLatest(actions.getVideos.getVideosRequest, fetchVideoSaga) //action cuoi dung duoc su li cancle all
yield takeLatest(actions.postCustomer.postCustomersRequest,postCustomerSaga )
yield takeLatest(actions.getLogin.getLoginRequest, getLoginSaga)


}



//generator function ES6

export default mySaga;