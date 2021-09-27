import {ActionType} from '../action';

const initialState = {
    popupAdd: false,
    popupSuccess: false,
    popupDelete: false,
    addOffer: [],
    offerDelete: []
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case ActionType.POPUP_ADD:
            return {
                ...state,
                popupAdd: action.payload
            }
        case ActionType.POPUP_SUCCESS:
            return {
                ...state,
                popupSuccess: action.payload
            }
        case ActionType.POPUP_DELETE:
            return {
                ...state,
                popupDelete: action.payload
            }
        case ActionType.ADD_OFFER:
            return {
                ...state,
                addOffer: action.payload
            }
        case ActionType.OFFER_DELETE:
            return {
                ...state,
                offerDelete: action.payload
            }
        default: return state
    }
}
