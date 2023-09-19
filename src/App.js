import AppRoutes from './AppRoutes'
import { StoreProvider } from './context/StoreContext'

function App() {
	return (
		<StoreProvider>
			<AppRoutes />
		</StoreProvider>
	)
}

export default App
