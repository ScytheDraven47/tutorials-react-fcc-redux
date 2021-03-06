import {
	ADJUST_AMOUNT,
	REMOVE_ITEM,
	CLEAR_CART,
	UPDATE_TOTALS,
} from './actions'
import cartItems from './cart-items'

const initialStore = {
	cart: cartItems,
	total_items: 0,
	total_price: 0,
}

const reducer = (state = initialStore, action) => {
	switch (action.type) {
		case ADJUST_AMOUNT:
			const { id: idToAdjust, value: amount } = action.payload
			return {
				...state,
				cart: state.cart.map((item) => {
					if (item.id === idToAdjust)
						return {
							...item,
							amount: item.amount + amount,
						}
					return item
				}),
			}
		case REMOVE_ITEM:
			const { id: idToRemove } = action.payload
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== idToRemove),
			}
		case CLEAR_CART:
			return {
				...state,
				cart: [],
			}
		case UPDATE_TOTALS:
			const { total_items, total_price } = state.cart.reduce(
				(acc, item) => ({
					total_items: acc.total_items + item.amount,
					total_price: acc.total_price + item.amount * item.price,
				}),
				{ total_items: 0, total_price: 0 }
			)

			return {
				...state,
				total_items,
				total_price,
			}
		default:
			if (!action.type.startsWith('@@redux'))
				console.warn('invalid action type')
			return state
	}
}

export default reducer
