import React from 'react'
// components
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
// items
import cartItems from './cart-items'

// redux stuff
import { createStore } from 'redux'
import reducer from './reducer'

const initialStore = {
	cart: [],
	total_items: 0,
	total_price: 0,
}

const store = createStore(reducer, initialStore)

function App() {
	// cart setup

	return (
		<main>
			<Navbar />
			<CartContainer cart={cartItems} />
		</main>
	)
}

export default App
