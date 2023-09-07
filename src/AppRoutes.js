import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RobotsPage from './pages/RobotsPage'
import NotFoundPage from './pages/NotFoundPage'
import DefaultLayout from './pages/DefaultLayout'

export default function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<DefaultLayout />}>
					<Route index element={<RobotsPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</Router>
	)
}
