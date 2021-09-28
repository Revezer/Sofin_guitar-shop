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
    },
    four: true,
    six: true,
    seven: true,
    twelve: true,
    stringsActive: {
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
        case ActionType.FILTER_PRICE:
            return {
                ...state,
                filterOffers: state.offers.filter(offer => offer.price >= state.filter.minPrice && offer.price <= state.filter.maxPrice)
            }
        case ActionType.FILTER_TYPE:
            switch (true){
                case state.filter.acoustics && state.filter.electro && state.filter.ukulele:
                    return {
                        ...state,
                        four: true,
                        six: true,
                        seven: true,
                        twelve: true,
                        filterOffers: state.filterOffers
                    }
                case state.filter.acoustics && state.filter.electro:
                    return {
                        ...state,
                        four: true,
                        six: true,
                        seven: true,
                        twelve: true,
                        filterOffers: state.filterOffers.filter(offer => offer.type === 'акустическая гитара' || offer.type === 'электрогитара')
                    }
                case state.filter.acoustics && state.filter.ukulele:
                    return {
                        ...state,
                        four: true,
                        six: true,
                        seven: true,
                        twelve: true,
                        filterOffers: state.filterOffers.filter(offer => offer.type === 'акустическая гитара' || offer.type === 'укулеле')
                    }
                case state.filter.electro && state.filter.ukulele:
                    return {
                        ...state,
                        four: true,
                        six: true,
                        seven: true,
                        twelve: false,
                        stringsActive: {
                            four: state.stringsActive.four,
                            six: state.stringsActive.six,
                            seven: state.stringsActive.seven,
                            twelve: false,
                        },
                        filterOffers: state.filterOffers.filter(offer => offer.type === 'электрогитара' || offer.type === 'укулеле')
                    }
                case state.filter.acoustics:
                    return {
                        ...state,
                        four: false,
                        six: true,
                        seven: true,
                        twelve: true,
                        stringsActive: {
                            four: false,
                            six: state.stringsActive.six,
                            seven: state.stringsActive.seven,
                            twelve: state.stringsActive.twelve,
                        },
                        filterOffers: state.filterOffers.slice().filter(offer => offer.type === 'акустическая гитара')
                    }
                case state.filter.electro:
                    return {
                        ...state,
                        four: true,
                        six: true,
                        seven: true,
                        twelve: false,
                        stringsActive: {
                            four: state.stringsActive.four,
                            six: state.stringsActive.six,
                            seven: state.stringsActive.seven,
                            twelve: false,
                        },
                        filterOffers: state.filterOffers.filter(offer => offer.type === 'электрогитара')
                    }
                case state.filter.ukulele:
                    return {
                        ...state,
                        four: true,
                        six: false,
                        seven: false,
                        twelve: false,
                        stringsActive: {
                            four: state.stringsActive.four,
                            six: false,
                            seven: false,
                            twelve: false,
                        },
                        filterOffers: state.filterOffers.filter(offer => offer.type === 'укулеле')
                    }
                default:
                    return {
                        ...state,
                        four: true,
                        six: true,
                        seven: true,
                        twelve: true,
                    }
            }
        case ActionType.FILTER_STRINGS:
            let filterOffersString = []
            let temporaryOffers = []
            if(state.stringsActive.four) {
                temporaryOffers = state.filterOffers.filter(offer => offer.strings === 4)
                Array.prototype.push.apply(filterOffersString, temporaryOffers);
            }
            if (state.stringsActive.six) {
                temporaryOffers = state.filterOffers.filter(offer => offer.strings === 6)
                Array.prototype.push.apply(filterOffersString, temporaryOffers);
            }
            if (state.stringsActive.seven) {
                temporaryOffers = state.filterOffers.filter(offer => offer.strings === 7)
                Array.prototype.push.apply(filterOffersString, temporaryOffers);
            }
            if (state.stringsActive.twelve) {
                temporaryOffers = state.filterOffers.filter(offer => offer.strings === 12)
                Array.prototype.push.apply(filterOffersString, temporaryOffers);
            }
            if(state.stringsActive.four === false && state.stringsActive.six === false && state.stringsActive.seven === false && state.stringsActive.twelve === false) {
                filterOffersString = state.filterOffers
            }
            return {
                ...state,
                filterOffers: filterOffersString
            }
        case ActionType.STRINGS:
            return {
                ...state,
                stringsActive: action.payload
            }
        default: return state
    }
}