import * as types from './actionTypes'


export const getHotelsRequest = () => {
    return {
        type: types.FETCH_HOTELS_DATA_REQUEST
    }
}
export const getHotelsSuccess = (payload) => {
    return {
        type: types.FETCH_HOTELS_DATA_SUCCESS,
        hotels: payload,
    }
}
export const getHotelsFailure = () => {
    return {
        type: types.FETCH_HOTELS_DATA_FAILURE
    }
}