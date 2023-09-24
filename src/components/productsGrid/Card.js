import { useStoreDispatch, useStore } from '../../context/StoreContext'
import { updateWishList, updateShoppingCart } from '../../actions/actions'

export default function Card({ product }) {
	const { images, title, isWished, category, price } = product
	const store = useStore()
	const dispatch = useStoreDispatch()

	const handleWishListToggle = () => {
		updateWishList(product, dispatch, store.productsList, store.wishList)
	}
	const handleAddToCart = () => {
		updateShoppingCart(
			product,
			dispatch,
			store.productsList,
			store.wishList,
			store.totalBuyQty,
			store.totalPrice
		)
	}

	return (
		<div className='card' style={{ width: '18rem' }}>
			<div className='card-img-box'>
				<button
					className={`card-btn-wishList ${
						isWished ? 'bg-dark' : 'bg-secondary'
					}`}
					type='button'
					onClick={handleWishListToggle}
				>
					H
				</button>
				<a href='/'>
					<img src={images && images[0]} className='card-img' alt={title} />
				</a>
			</div>
			<div className='card-body'>
				<a href='/home' className='d-block text-muted card-category'>
					{category}
				</a>
				<h3 className='card-title'>
					<a href='/home'>{title}</a>
				</h3>
				<p className='text-accent'>${price}</p>
				<button
					className='btn btn-primary'
					type='button'
					onClick={handleAddToCart}
				>
					Add to Cart
				</button>
			</div>
		</div>
	)
}
