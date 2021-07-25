import { combineReducers } from 'redux'

import authReducer from './auth.reducer'
import productReducer from './product.reducer'
import cartReducer from './cart.reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    product: productReducer,
})

export default rootReducer