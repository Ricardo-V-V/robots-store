import { useEffect, useState } from 'react'
import Card from './Card'
import { useStoreDispatch, useStore } from '../../context/StoreContext'
import './styles.scss'

export default function ProductsGrid() {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const dispatch = useStoreDispatch()
	const store = useStore()

	useEffect(() => {
		fetch('https://dummyjson.com/products')
			.then(res => res.json())
			.then(data => {
				dispatch({ productsList: data.products, type: 'GET_PRODUCTS' })
			})
			.catch(() => {
				setError(true)
			})
			.finally(setLoading(false))
		// eslint-disable-next-line
	}, [])

	const cards = store.productsList?.map(item => (
		<div key={item.id}>
			<Card
				title={item.title}
				price={item.price}
				images={item.images}
				category={item.category}
			/>
		</div>
	))

	return (
		<div className='container-fluid d-flex flex-wrap align-items-stretch products-grid py-4'>
			{loading && <div>Loading...</div>}
			{error && <div>There is a problem fetching the data</div>}
			{cards}
		</div>
	)
}
