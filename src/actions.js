export const ADJUST_AMOUNT = 'ADJUST_AMOUNT'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CLEAR_CART = 'CLEAR_CART'
export const UPDATE_TOTALS = 'UPDATE_TOTALS'

export const removeItem = (id) => {
	return { type: REMOVE_ITEM, payload: { id } }
}
export const adjustAmount = (id, value) => {
	return { type: ADJUST_AMOUNT, payload: { id, value } }
}
