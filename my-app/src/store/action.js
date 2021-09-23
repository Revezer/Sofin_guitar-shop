export const ActionType = {
    SORT_BY_PRICE: 'main/sorting-price',
    SORT_BY_POPYLARITY: 'main/sorting-popylarity',
    SORT_BY_UP: 'main/sorting-up',
    SORT_BY_DOWN: 'main/sorting-down',
    SORT_OFFERS: 'main/sorting-offers',
    FILTER: 'main/filter-type',
    FILTER_OFFERS: 'main/filter-offers',
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
