import { useEffect } from 'react'
import Card from './Card'
import { useStoreDispatch, useStore } from '../../context/StoreContext'
import { getProducts } from '../../actions/actions'
import './styles.scss'

export default function ProductsGrid() {
	const store = useStore()
	const dispatch = useStoreDispatch()
	useEffect(() => {
		getProducts(dispatch)
	}, [dispatch])

	const cards = store.productsList.map(item => (
		<div key={item.id}>
			<Card
				id={item.id}
				title={item.title}
				price={item.price}
				images={item.images}
				category={item.category}
				isWished={item.isWished}
			/>
		</div>
	))

	return (
		<div className='container-fluid d-flex flex-wrap align-items-stretch products-grid py-4'>
			{store.isLoading && <div>Loading...</div>}
			{store.requestFailed && <div>There is a problem fetching the data</div>}
			{cards}
		</div>
	)
}
