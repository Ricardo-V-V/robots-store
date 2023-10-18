export default function ItemCounter({ id, buyQty = 0 }) {
	return (
		<div className='cart-counter'>
			{id}
			<button type='button' className='cart-counter-btn'>
				-
			</button>
			<span className='cart-counter-qty'>{buyQty}</span>
			<button type='button' className='cart-counter-btn'>
				+
			</button>
		</div>
	)
}
