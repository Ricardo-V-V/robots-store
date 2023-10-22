import ListItem from './ListItem'
import './styles.scss'

export default function ProductsList({ list, listType }) {
	const itemsList = list.map(product => (
		<ListItem product={{ ...product }} key={product.id} listType={listType} />
	))

	return (
		<div className='container-fluid d-flex flex-wrap align-items-stretch products-grid pt-4 pb-5'>
			{itemsList.length === 0 && <div>No products selected</div>}
			{itemsList}
		</div>
	)
}
