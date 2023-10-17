import PageTitle from '../components/pageTitle/PageTitle'
import ProductsList from '../components/productsList'
import { useStore } from '../context/StoreContext'

export default function CartPage() {
	const store = useStore()
	return (
		<section>
			<PageTitle title='Your Cart' />
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8'>
						<ProductsList list={store.shoppingCart} />
					</div>
				</div>
			</div>
		</section>
	)
}
