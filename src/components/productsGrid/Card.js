import { useStoreDispatch, useStore } from '../../context/StoreContext'
import { updateWishList, addShoppingCart } from '../../actions/actions'
import HeartIcon from '../icons/HeartIcon'

export default function Card({ product }) {
	const { images, title, isWished, category, price } = product
	const store = useStore()
	const dispatch = useStoreDispatch()

	const handleWishListToggle = () => {
		updateWishList(product, dispatch, store.productsList, store.wishList)
	}
	const handleAddToCart = () => {
		addShoppingCart(
			product,
			dispatch,
			store.shoppingCart,
			store.totalBuyQty,
			store.totalPrice
		)
	}

	return (
		<div className='card' style={{ width: '18rem' }}>
			<div className='card-img-box'>
				<button
					className={`card-btn-wishList ${
						isWished ? 'card-btn-wishList-selected' : 'bg-secondary'
					}`}
					type='button'
					onClick={handleWishListToggle}
				>
					<HeartIcon />
				</button>
				<a href='/'>
					<img
						src={
							(images && images[1]) ||
							'https://placehold.co/150?text=Image+not+available'
						}
						className='card-img'
						alt={title}
					/>
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
