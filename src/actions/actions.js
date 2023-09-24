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
	const newProductsList = [...productsList]
	const wishListIndex = newWishList.findIndex(item => item.id === product.id)
	const productListIndex = newProductsList.findIndex(
		item => item.id === product.id
	)

	if (wishListIndex === -1) {
		newWishList.push({ ...product, isWished: true })
		newProductsList[productListIndex] = { ...product, isWished: true }
	} else {
		newWishList.splice(wishListIndex, 1)
		newProductsList[productListIndex] = { ...product, isWished: false }
	}
	dispatch({
		wishList: newWishList,
		productsList: newProductsList,
		type: 'UPDATE_WISHLIST',
	})
}

const updateShoppingCart = (
	product,
	dispatch,
	productsList,
	shoppingCart,
	totalBuyQty,
	totalPrice
) => {
	const newShoppingCart = [...shoppingCart]
	const newProductsList = [...productsList]
	const cartIndex = newShoppingCart.findIndex(item => item.id === product.id)
	const productListIndex = newProductsList.findIndex(
		item => item.id === product.id
	)

	const newProduct = { ...product, buyQty: (+product.buyQty || 0) + 1 }
	const newTotalBuyQty = totalBuyQty + 1
	const newTotalPrice = totalPrice + product.price

	if (cartIndex === -1) {
		newShoppingCart.push({
			...newProduct,
		})
	} else {
		newShoppingCart[cartIndex] = { ...newProduct }
		if (newShoppingCart[cartIndex].buyQty === 0) {
			newShoppingCart.splice(cartIndex, 1)
		}
	}

	newProductsList[productListIndex] = {
		...newProduct,
	}

	dispatch({
		shoppingCart: newShoppingCart,
		productsList: newProductsList,
		totalBuyQty: newTotalBuyQty,
		totalPrice: newTotalPrice,
		type: 'UPDATE_SHOPPING_CART',
	})
}

export { getProducts, updateWishList, updateShoppingCart }
