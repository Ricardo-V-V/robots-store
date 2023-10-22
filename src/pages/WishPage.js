import PageTitle from '../components/pageTitle/PageTitle'
import ProductsList from '../components/productsList'
import { useStore } from '../context/StoreContext'

export default function WishPage() {
	const store = useStore()
	return (
		<section>
			<PageTitle title='Your Wishlist' />
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8'>
						<ProductsList list={store.wishList} listType='WISHLIST' />
					</div>
				</div>
			</div>
		</section>
	)
}
