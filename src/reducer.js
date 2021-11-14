import {
	ADJUST_AMOUNT,
	REMOVE_ITEM,
	CLEAR_CART,
	UPDATE_TOTALS,
} from './actions'

const reducer = (state, action) => {
	switch (action.type) {
		case ADJUST_AMOUNT:
			const { id: idToAdjust, value: amount } = action.payload
			return {
				...state,
				cart: state.cart
					.map((item) => {
						if (item.id === idToAdjust)
							return {
								...item,
								amount: item.amount + amount,
							}
						return item
					})
					.filter((item) => item.amount > 0),
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
			return {
				...state,
				total_items: state.cart.reduce(
					(acc, item) => acc + item.amount,
					0
				),
				total_price: state.cart.reduce(
					(acc, item) => acc + item.amount * item.price,
					0
				),
			}
		default:
			if (!action.type.startsWith('@@redux'))
				console.warn('invalid action type')
			return state
	}
}

export default reducer
