import { Link } from 'react-router-dom'

export default function PageTitle({ title }) {
	return (
		<div className='bg-dark'>
			<div className='container pt-5 pb-3 text-white'>
				<div className='container-fluid'>
					<h2 className='h3 m-0'>{title}</h2>
				</div>
				<div className='container-fluid d-flex justify-content-between align-items-center pt-4'>
					<h3 className='h5 m-0'>Products</h3>
					<Link className='btn btn-outline-primary' to='/'>
						Continue shopping
					</Link>
				</div>
			</div>
		</div>
	)
}
