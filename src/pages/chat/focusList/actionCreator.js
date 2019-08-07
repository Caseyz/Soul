
import axios from 'axios'
const asyncGetMyFocusListData = () => {
    return (dispatch) => {
        // dispatch(() => {
        //     fetch("https://api.zhaoyx0907.com/getfocus").then((response) => {
        //         return response.json
        //     }).then((ret) => {
        //         dispatch({
        //             type: "getMyFocus",
        //             payLoad: ret
        //         })
        //     })
        // })
        setTimeout(() => {
            dispatch({
                type: "getMyFocus",
                payload: [{
                    "id": 1001,
                    "userName": "honey",
                    "head": "/head/0/1.jpg"
                },
                {
                    "id": 1002,
                    "userName": "lily",
                    "head": "/head/0/1.jpg"
                }]
            })
        }, 1000);
    }
}
const asyncGetFocusMeList = (dispatch) => {
    return (dispatch) => {
        // fetch("https://api.zhaoyx0907.com/focusme").then((response) => {
        //     return response.json
        // }).then((ret) => {
        //     dispatch({
        //         type: "getFocusMe",
        //         payload: ret
        //     })
        // })
        setTimeout(() => {
            dispatch({
                type: "getFocusMe",
                payload: [{
                    "id": 1001,
                    "userName": "关注我的",
                    "head": "/head/0/1.jpg"
                },
                {
                    "id": 1002,
                    "userName": "关注我的",
                    "head": "/head/0/1.jpg"
                }]
            })
        }, 1000);
    }
}
const asyncGetAll = (dispatch) => {
    return (dispatch) => {
        try {
            const myFocus = axios.get('https://api.zhaoyx0907.com/getfocus');
            const FocusMe = axios.get('https://api.zhaoyx0907.com/focusme');
            axios.all([myFocus, FocusMe])
                .then(axios.spread(function (acct, perms) {
                    dispatch({
                        type: "getAll",
                        payload: { acct, perms }
                    })
                }));
        } catch (error) {
            console.error(error);
        }

    }
}
const loadTestData = () => {
    return (dispatch) => {
        setTimeout(() => {
            console.log(0)
            dispatch(
                {
                    type: "getAll",
                    payload: {
                        myFocusList: [{
                            "id": 1001,
                            "userName": "张三 1",
                            "head": "/head/0/1.jpg"
                        },
                        {
                            "id": 1002,
                            "userName": "张三 2",
                            "head": "/head/0/1.jpg"
                        },
                        {
                            "id": 1003,
                            "userName": "张三 3",
                            "head": "/head/0/1.jpg"
                        }],
                        focusMeList: [{
                            "id": 1001,
                            "userName": "TOM 1",
                            "head": "/head/0/1.jpg"
                        },
                        {
                            "id": 1002,
                            "userName": "LILY 2",
                            "head": "/head/0/1.jpg"
                        },
                        {
                            "id": 1003,
                            "userName": "HanMeimei 3",
                            "head": "/head/0/1.jpg"
                        },
                        {
                            "id": 1004,
                            "userName": "Lilei 4",
                            "head": "/head/0/1.jpg"
                        }],
                    }
                }
            )

        }, 1000)
    }
}
export {
    asyncGetMyFocusListData,
    asyncGetFocusMeList,
    asyncGetAll,
    loadTestData
}