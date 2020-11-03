import {combineReducers} from 'redux';

import UserDetails from './reducers/UserDetails';
import AdminState from './reducers/AdminState';
import CartItems from './reducers/CartItems';





export default combineReducers({
UserDetails,
AdminState,
CartItems

});