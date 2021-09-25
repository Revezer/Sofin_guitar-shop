export const ActionType = {
    SORT_BY_PRICE: 'main/sorting-price',
    SORT_BY_POPYLARITY: 'main/sorting-popylarity',
    SORT_BY_UP: 'main/sorting-up',
    SORT_BY_DOWN: 'main/sorting-down',
    SORT_OFFERS: 'main/sorting-offers',
    FILTER: 'main/filter-type',
    FILTER_OFFERS: 'main/filter-offers',
    PAGE: 'main/catalog-page',
    POPUP_ADD: 'main/catalog-popup-add',
    POPUP_SUCCESS: 'main/catalog-popup-success',
    POPUP_DELETE: 'basket-popup-delete',
    ADD_OFFER: 'main/catalog-offer',
    ADDED_OFFERS: 'basket-offers',
    TOTAL_PRICE: 'basket-price',
    OFFER_DELETE: 'basket-offer-delete'
  };

  
export const setPriceSort = (bool) => ({
    type: ActionType.SORT_BY_PRICE,
    payload: bool
});

export const setPopylaritySort = (bool) => ({
    type: ActionType.SORT_BY_POPYLARITY,
    payload: bool
})

export const setUpSort = (bool) => ({
    type: ActionType.SORT_BY_UP,
    payload: bool
})

export const setDownSort = (bool) => ({
    type: ActionType.SORT_BY_DOWN,
    payload: bool
})

export const setOffersSort = (offers) => ({
    type: ActionType.SORT_OFFERS,
    payload: offers
})

export const setFilter = (data) => ({
    type: ActionType.FILTER,
    payload: data
})

export const setOffersFilter = (offers) => ({
    type: ActionType.FILTER_OFFERS,
    payload: offers
})

export const setPage = (number) => ({
    type: ActionType.PAGE,
    payload: number
})

export const setPopUpSuccess = (bool) => ({
    type: ActionType.POPUP_SUCCESS,
    payload: bool
})

export const setPopUpAdd = (bool) => ({
    type: ActionType.POPUP_ADD,
    payload: bool
})

export const setPopUpDelete = (bool) => ({
    type: ActionType.POPUP_DELETE,
    payload: bool
})

export const setOffer = (offer) => ({
    type: ActionType.ADD_OFFER,
    payload: offer
})

export const setOffers = (offers) => ({
    type: ActionType.ADDED_OFFERS,
    payload: offers
})

export const setTotalPrise = (price) => ({
    type: ActionType.TOTAL_PRICE,
    payload: price
})

export const setOfferDelete = (offer) => ({
    type: ActionType.OFFER_DELETE,
    payload: offer
})
