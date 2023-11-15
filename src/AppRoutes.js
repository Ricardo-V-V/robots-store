import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import DefaultLayout from './pages/DefaultLayout'
import CartPage from './pages/CartPage'
import WishPage from './pages/WishPage'

export default function AppRoutes() {
	return (
		<Router basename='/shopping-cart'>
			<Routes>
				<Route path='/' element={<DefaultLayout />}>
					<Route index element={<HomePage />} />
					<Route path='/cart' element={<CartPage />} />
					<Route path='/wishlist' element={<WishPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</Router>
	)
}
