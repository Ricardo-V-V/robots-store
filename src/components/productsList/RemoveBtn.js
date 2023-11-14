import { useStoreDispatch, useStore } from '../../context/StoreContext'
import { updateWishList } from '../../actions/actions'

export default function RemoveBtn({ product }) {
	const store = useStore()
	const dispatch = useStoreDispatch()

	const handleRemove = () => {
		updateWishList(product, dispatch, store.productsList, store.wishList)
	}

	return (
		<button
			type='button'
			className='btn btn-outline-primary'
			onClick={handleRemove}
		>
			Remove
		</button>
	)
}
