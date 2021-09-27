import { combineReducers } from 'redux'
import filters from './filters'
import sorting from './sorting'
import popups from './popups'

export default combineReducers({
  filters,
  sorting,
  popups
})