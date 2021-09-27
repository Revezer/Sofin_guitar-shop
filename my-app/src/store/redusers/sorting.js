import offers from '../../mock/offers';
import {ActionType} from '../action';

const initialState = {
    sortMoney: false,
    sortPopularity: false,
    sortUp: false,
    sortDown: false,
    sortOffers: offers,
    page : 1,
}

function sortPopularityLowToHigh(offerA, offerB) {
    return (offerA.popularity - offerB.popularity);
}

function sortPopularityHighToLow(offerA, offerB) {
    return (offerB.popularity - offerA.popularity);
}
  
function sortPriceLowToHigh(offerA, offerB) {
    return (offerB.price - offerA.price);
}
  
function sortPriceHighToLow(offerA, offerB) {
    return (offerA.price - offerB.price);
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case ActionType.SORT_BY_PRICE:
            return {
                ...state,
                sortMoney: action.payload
            };
        case ActionType.SORT_BY_POPYLARITY:
            return {
                ...state,
                sortPopularity: action.payload
            };
        case ActionType.SORT_BY_UP:
            return {
                ...state,
                sortUp: action.payload
            };
        case ActionType.SORT_BY_DOWN:
            return {
                ...state,
                sortDown: action.payload
            };
        case ActionType.SORT_OFFERS:
            return {
                ...state,
                sortOffers: action.payload
            }
        case ActionType.PAGE:
            return {
                ...state,
                page: action.payload
            }
        case ActionType.SORTING:
            switch(true) {
                case state.sortMoney:
                    switch(true) {
                        case state.sortUp:
                            return {
                                ...state,
                                sortOffers: action.payload.slice().sort(sortPriceHighToLow)
                            }
                        case state.sortDown:
                            return {
                                ...state,
                                sortOffers: action.payload.slice().sort(sortPriceLowToHigh)
                            }
                        default:
                            return {
                                ...state,
                                sortOffers: action.payload.slice().sort(sortPriceHighToLow)
                            }
                    }
                case state.sortPopularity:
                    switch(true) {
                        case state.sortUp:
                            return {
                                ...state,
                                sortOffers: action.payload.slice().sort(sortPopularityLowToHigh)
                            }
                        case state.sortDown:
                            return {
                                ...state,
                                sortOffers: action.payload.slice().sort(sortPopularityHighToLow)
                            }
                        default:
                            return {
                                ...state,
                                sortOffers: action.payload.slice().sort(sortPopularityLowToHigh)
                            }
                    }
                default:
                    return{
                        ...state,
                        sortOffers: action.payload.slice()
                    }
            }
        default: return state
    }
}