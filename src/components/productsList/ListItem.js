import { Link } from 'react-router-dom'
import ItemCounter from './ItemCounter'

export default function ListItem({ product }) {
	const { images, title, description, price } = product
	return (
		<div className='listItem border-bottom pt-3 pb-4 w-100'>
			<Link to='/'>
				<img
					src={
						(images && images[1]) ||
						'https://placehold.co/150?text=Image+not+available'
					}
					className='listItem-img'
					alt={title}
				/>
			</Link>
			<div className='listItem-info'>
				<h3 className='listItem-title'>
					<Link to='/'>{title}</Link>
				</h3>
				<p className='listItem-description'>{description}</p>
				<p className='text-accent mb-0'>${price}</p>
			</div>
			<div className='cart-counter-box'>
				<p className='cart-counter-title'>Quantity</p>
				<ItemCounter product={product} />
			</div>
		</div>
	)
}
