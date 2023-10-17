export default function ListItem({ product }) {
	const { images, title, description, price } = product
	return (
		<div className='listItem border-bottom pt-3 pb-4'>
			<a href='/'>
				<img
					src={
						(images && images[1]) ||
						'https://placehold.co/150?text=Image+not+available'
					}
					className='listItem-img'
					alt={title}
				/>
			</a>
			<div className='listItem-info'>
				<h3 className='listItem-title'>
					<a href='/'>{title}</a>
				</h3>
				<p className='listItem-description'>{description}</p>
				<p className='text-accent'>${price}</p>
			</div>
			<div>
				<p>Quantity</p>
			</div>
		</div>
	)
}
