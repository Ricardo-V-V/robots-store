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
		case 'GET_PRODUCTS_SUCCESS': {
			return {
				...store,
				isLoading: false,
				requestFailed: false,
				productsList: action.productsList,
			}
		}
		case 'GET_PRODUCTS_FAILED': {
			return {
				...store,
				requestFailed: true,
				isLoading: false,
			}
		}
		case 'UPDATE_WISHLIST': {
			return {
				...store,
				wishList: action.wishList,
				productsList: action.productsList,
			}
		}
		default: {
			return { ...store }
		}
	}
}

const initialStore = {
	productsList: [],
	isLoading: true,
	requestFailed: false,
	wishList: [],
	count: 0,
}

export function StoreProvider({ children }) {
	const [store, dispatch] = useReducer(StoreReducer, initialStore)

	return (
		<StoreContext.Provider value={store}>
			<StoreDispatchContext.Provider value={dispatch}>
				{children}
			</StoreDispatchContext.Provider>
		</StoreContext.Provider>
	)
}
