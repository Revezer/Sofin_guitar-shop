import offers from '../mock/offers';
import {ActionType} from './action';

const initialState = {
  offers: offers,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.CHANGE_INFORMATION:
        return {
          ...state,
          offers: action.payload
        };
      default:
    }
  return state;
};

export default reducer;
