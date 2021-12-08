import {createActions, createAction} from 'redux-actions'

export const getType = (reduxAction) =>{
    return reduxAction().type;
};

export const getVideos = createActions({

    getVideosRequest: undefined,
    getVideosSuccess: (payload) => payload,
    getVideosFailure: (err) => err,
});


export const postCustomer = createActions({
    postCustomersRequest: (payload) => payload,
    postCustomersSuccess: (payload) => payload,
    postCustomersFailure: (err) => err,
})


export const editCustomer = createActions({

    editCustomersRequest: (payload) => payload,
    editCustomersSuccess: (payload) => payload,
    editCustomersFailure: (err) => err,

})

export const getLogin = createActions({
    getLoginRequest: undefined,
    getLoginSuccess: (payload) => payload,
    getLoginFailure: (err)  => err,
})


export const getDictionary = createActions({

    getDictionarysRequest: undefined,
    getDictionarysSuccess: (payload) => payload,
    getDictionarysFailure: (err) => err,
});

export const getComments = createActions({

    getCommentsRequest: undefined,
    getCommentsSuccess: (payload) => payload,
    getCommentsFailure: (err) => err
});
export const createComments = createActions({
    createCommentsRequest: (payload) => payload,
    createCommentsSuccess: (payload) => payload,
    createCommentsFailure: (err) => err,
});

export const deleteComments = createActions({
    deleteCommentsRequest: (payload) => payload,
    deleteCommentsSuccess: (payload) => payload,
    deleteCommentsFailure: (err) => err,
})

export const updateComments = createActions({
    updateCommentsRequest: (payload) => payload,
    updateCommentsSuccess: (payload) => payload,
    updateCommentsFailure: (err) => err,
})
export const createBlogs = createActions({
    createBlogsRequest: (payload) => payload,
    createBlogsSuccess: (payload) => payload,
    createBlogsFailure: (err) => err,
})
export const getBlogs = createActions({

    getBlogsRequest: undefined,
    getBlogsSuccess: (payload) => payload,
    getBlogsFailure: (err) => err
});

export const getQuizs = createActions({

    getQuizsRequest: undefined,
    getQuizsSuccess: (payload) => payload,
    getQuizsFailure: (err) => err
});

export const getMyCourse = createActions({
    getMyCoursesRequest: undefined,
    getMyCoursesSuccess: (payload) => payload,
    getMyCoursesFailure: (err) => err

});



export const showModal = createAction('SHOW_MODAL')
export const hideModal = createAction('HIDE_MODAL')