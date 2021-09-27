import offers from '../../mock/offers';
import {ActionType} from '../action';

const initialState = {
    offers: offers,
    filter: {
        minPrice: 1700,
        maxPrice: 35000,
        acoustics: false,
        electro: false,
        ukulele: false,
        four: false,
        six: false,
        seven: false,
        twelve: false,
    },
    filterOffers: offers,
    addedOffers: [],
    totalPrice: 0,
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case ActionType.FILTER:
            return {
                ...state,
                filter: action.payload
            }
        case ActionType.FILTER_OFFERS:
            return {
                ...state,
                filterOffers: action.payload
            }
        case ActionType.ADDED_OFFERS:
            return {
                ...state,
                addedOffers: action.payload
            }
        case ActionType.TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload
            }
        default: return state
    }
}