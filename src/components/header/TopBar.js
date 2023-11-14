import { Link } from 'react-router-dom'
import { useStore } from '../../context/StoreContext'
import HeartIcon from '../icons/HeartIcon'

export default function TopBar() {
	const store = useStore()

	return (
		<div className='bg-dark'>
			<div className='container'>
				<div className='container-fluid d-flex justify-content-end py-2'>
					<div className='topbar-wishlist'>
						<HeartIcon color='primary' />
						<Link to='/wishlist' className='topbar-link'>
							Wishlist ({store.wishList?.length})
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
