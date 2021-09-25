import offers from '../mock/offers';
import {ActionType} from './action';

const initialState = {
    offers: offers,
    sortMoney: false,
    sortPopularity: false,
    sortUp: false,
    sortDown: false,
    sortOffers: offers,
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
    page : 1,
    popupAdd: false,
    popupSuccess: false,
    popupDelete: false,
    addOffer: [],
    addedOffers: [],
    totalPrice: 0,
    offerDelete: []
};

const reducer = (state = initialState, action) => {
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
        case ActionType.PAGE:
            return {
                ...state,
                page: action.payload
            }

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
        case ActionType.OFFER_DELETE:
            return {
                ...state,
                offerDelete: action.payload
            }
        default:
    }
  return state;
};

export default reducer;
