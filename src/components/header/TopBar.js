import { useStore } from '../../context/StoreContext'

export default function TopBar() {
	const store = useStore()
	return (
		<div className='bg-dark'>
			<div className='container'>
				<div className='container-fluid d-flex justify-content-end py-2'>
					<a href='/robots' className='topbar-link'>
						Wishlist ({store.wishList?.length})
					</a>
				</div>
			</div>
		</div>
	)
}
