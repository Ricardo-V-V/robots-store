import { createContext, useReducer, useContext } from 'react'

export const StoreContext = createContext(null)
export const StoreDispatchContext = createContext(null)

export function useStoreDispatch() {
	return useContext(StoreDispatchContext)
}

export function useStore() {
	return useContext(StoreContext)
}

function StoreReducer(store, action) {
	switch (action.type) {
		case 'GET_PRODUCTS': {
			return {
				...store,
				productsList: action.productsList,
			}
		}
		default: {
			console.log('default')
		}
	}
}

const initialStore = {
	productsList: [],
	count: 0,
}

export function StoreProvider({ children }) {
	const [products, dispatch] = useReducer(StoreReducer, initialStore)

	return (
		<StoreContext.Provider value={products}>
			<StoreDispatchContext.Provider value={dispatch}>
				{children}
			</StoreDispatchContext.Provider>
		</StoreContext.Provider>
	)
}
