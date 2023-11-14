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
				success: true,
			}
		}
		case 'GET_PRODUCTS_FAILED': {
			return {
				...store,
				requestFailed: true,
				isLoading: false,
			}
		}
		case 'GET_CATEGORIES_SUCCESS': {
			return {
				...store,
				isLoadingCategories: false,
				failedCategories: false,
				categories: action.categories,
				successCategories: true,
			}
		}
		case 'GET_CATEGORIES_FAILED': {
			return {
				...store,
				failedCategories: true,
				isLoadingCategories: false,
			}
		}
		case 'UPDATE_SELECTED_CATEGORY': {
			return {
				...store,
				selectedCategory: action.category,
			}
		}
		case 'UPDATE_WISHLIST': {
			return {
				...store,
				wishList: action.wishList,
				productsList: action.productsList,
			}
		}
		case 'UPDATE_SHOPPING_CART': {
			return {
				...store,
				shoppingCart: action.shoppingCart,
				totalBuyQty: action.totalBuyQty,
				totalPrice: action.totalPrice,
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
	shoppingCart: [],
	totalBuyQty: 0,
	totalPrice: 0,
	success: false,
	categories: [],
	selectedCategory: 'all',
	isLoadingCategories: true,
	successCategories: false,
	failedCategories: false,
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
