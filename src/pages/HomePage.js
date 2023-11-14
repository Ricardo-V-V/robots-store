import ProductsGrid from '../components/productsGrid'
import CategoryFilter from '../components/categoryFilter'

export default function HomePage() {
	return (
		<section className='container'>
			<div className='container-fluid d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4'>
				<h2 className='h3 mb-0 pt-3 me-2'>Trending products</h2>
				<div className='pt-3'>
					<CategoryFilter />
				</div>
			</div>
			<ProductsGrid />
		</section>
	)
}
