import ListItem from './ListItem'
import './styles.scss'

export default function ProductsList({ list }) {
	const itemsList = list.map(product => (
		<div key={product.id}>
			<ListItem product={{ ...product }} />
		</div>
	))

	return (
		<div className='container-fluid d-flex flex-wrap align-items-stretch products-grid pt-4 pb-5'>
			{itemsList.length === 0 && <div>No products selected</div>}
			{itemsList}
		</div>
	)
}
