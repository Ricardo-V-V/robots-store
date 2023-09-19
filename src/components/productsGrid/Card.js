export default function Card({ title, price, images, category }) {
	return (
		<div className='card' style={{ width: '18rem' }}>
			<div className='card-img-box'>
				<button className='bg-secondary card-btn-wishList' type='button'>
					H
				</button>
				<a href='/'>
					<img src={images[0]} className='card-img' alt={title} />
				</a>
			</div>
			<div className='card-body'>
				<a href='/home' className='d-block text-muted card-category'>
					{category}
				</a>
				<h3 className='card-title'>
					<a href='/home'>{title}</a>
				</h3>
				<p className='text-accent'>${price}</p>
				<a href='/' className='btn btn-primary'>
					Go somewhere
				</a>
			</div>
		</div>
	)
}
