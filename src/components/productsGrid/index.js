import { useEffect } from 'react'
import Card from './Card'
import { useStoreDispatch, useStore } from '../../context/StoreContext'
import { getProducts } from '../../actions/actions'
import './styles.scss'

export default function ProductsGrid() {
	const store = useStore()
	const dispatch = useStoreDispatch()
	useEffect(() => {
		if (!store.success) {
			getProducts(dispatch)
		}
	}, [dispatch, store.success])

	const cards = store.productsList.map(product => (
		<div key={product.id}>
			<Card product={{ ...product }} />
		</div>
	))
	return (
		<div className='container-fluid d-flex flex-wrap align-items-stretch products-grid pt-4 pb-5'>
			{store.isLoading && <div>Loading...</div>}
			{store.requestFailed && <div>There is a problem fetching the data</div>}
			{cards}
		</div>
	)
}
