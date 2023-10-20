import { useStoreDispatch, useStore } from '../../context/StoreContext'
import { updateShoppingCart } from '../../actions/actions'

export default function ItemCounter({ product }) {
	const { buyQty } = product
	const store = useStore()
	const dispatch = useStoreDispatch()

	const handleAddToCart = e => {
		updateShoppingCart(
			product,
			dispatch,
			store.shoppingCart,
			store.totalBuyQty,
			store.totalPrice,
			e.target.value
		)
	}
	return (
		<div className='cart-counter'>
			<button
				value
				type='button'
				className='cart-counter-btn'
				onClick={handleAddToCart}
			>
				-
			</button>
			<span className='cart-counter-qty'>{buyQty}</span>
			<button
				type='button'
				className='cart-counter-btn'
				onClick={handleAddToCart}
			>
				+
			</button>
		</div>
	)
}
