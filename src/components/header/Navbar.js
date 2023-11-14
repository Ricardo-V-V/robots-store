import { Link } from 'react-router-dom'
import { useStore } from '../../context/StoreContext'
import CartIcon from '../icons/CartIcon'

export default function NavBar() {
	const store = useStore()

	return (
		<div className='container'>
			<nav className='navbar navbar-light bg-white'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/'>
						Shopping-Cart App
					</Link>
					{/* <form className='d-none d-md-flex flex-grow-1 mx-3'>
						<input
							className='form-control me-2'
							type='search'
							placeholder='Search'
							aria-label='Search'
						/>
						<button className='btn btn-outline-primary' type='submit'>
							Search
						</button>
					</form> */}
					<div className='navbar-tool'>
						<Link className='navbar-tool-icon-box bg-secondary' to='/cart'>
							<span className='navbar-tool-label bg-primary'>
								{store.totalBuyQty}
							</span>
							<CartIcon />
						</Link>
						<Link className='navbar-tool-text' to='/cart'>
							<small>My Cart</small>
							{`$${store.totalPrice}`}
						</Link>
					</div>
				</div>
			</nav>
		</div>
	)
}
