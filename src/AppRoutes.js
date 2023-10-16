import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import DefaultLayout from './pages/DefaultLayout'
import CartPage from './pages/CartPage'

export default function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<DefaultLayout />}>
					<Route index element={<HomePage />} />
					<Route path='/cart' element={<CartPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</Router>
	)
}
