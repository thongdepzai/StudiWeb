import {createActions} from 'redux-actions'

export const getType = (reduxAction) =>{
    return reduxAction().type;
}


export const getVideos = createActions({

    getVideosRequest: undefined,
    getVideosSuccess: (payload) => payload,
    getVideosFailure: (err) => err
});


export const postCustomer = createActions({
    postCustomersRequest: (payload) => payload,
    postCustomersSuccess: (payload) => payload,
    postCustomersFailure: (err) => err,
})




export const getLogin = createActions({
    getLoginRequest: undefined,
    getLoginSuccess: (payload) => payload,
    getLoginFailure: (err)  => err,
})