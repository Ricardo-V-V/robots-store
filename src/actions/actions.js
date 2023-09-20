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

const updateWishList = (id, dispatch, productsList, wishList) => {
	const newWishList = [...wishList]
	let newProductsList

	const index = newWishList.indexOf(id)
	if (index === -1) {
		newWishList.push(id)
		newProductsList = productsList.map(product => {
			if (product.id !== id) {
				return product
			}
			return { ...product, isWhished: true }
		})
	} else {
		newWishList.splice(index, 1)
		newProductsList = productsList.map(product => {
			if (product.id !== id) {
				return product
			}
			return { ...product, isWhished: false }
		})
	}
	dispatch({
		wishList: newWishList,
		productsList: newProductsList,
		type: 'UPDATE_WISHLIST',
	})
}

export { getProducts, updateWishList }
