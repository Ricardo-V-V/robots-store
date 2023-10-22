import { Link } from 'react-router-dom'
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
					<div className='col-lg-4'>
						<div className='checkout-box shadow-lg rounded-3 p-4 my-4 text-center'>
							<h3 className='h5'>Subtotal</h3>
							<h4 className='fw-normal border-bottom pb-3 mb-4'>
								${store.totalPrice}
							</h4>
							<Link to='/' className='btn btn-primary w-100'>
								Proceed to Checkout
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
