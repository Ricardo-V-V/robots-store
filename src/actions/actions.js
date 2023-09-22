const getProducts = dispatch => {
	fetch('https://dummyjson.com/products')
		.then(res => res.json())
		.then(data => {
			dispatch({
				productsList: data.products,
				type: 'GET_PRODUCTS_SUCCESS',
			})
		})
		.catch(() => {
			dispatch({
				type: 'GET_PRODUCTS_FAILED',
			})
		})
}

const updateWishList = (product, dispatch, productsList, wishList) => {
	const newWishList = [...wishList]
	let newProductsList

	const index = newWishList.findIndex(item => item.id === product.id)
	if (index === -1) {
		newWishList.push({ ...product, isWished: true })
		newProductsList = productsList.map(item => {
			if (item.id !== product.id) {
				return item
			}
			return { ...item, isWished: true }
		})
	} else {
		newWishList.splice(index, 1)
		newProductsList = productsList.map(item => {
			if (item.id !== product.id) {
				return item
			}
			return { ...item, isWished: false }
		})
	}
	dispatch({
		wishList: newWishList,
		productsList: newProductsList,
		type: 'UPDATE_WISHLIST',
	})
}

export { getProducts, updateWishList }
