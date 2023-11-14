import { useEffect } from 'react'
import { useStore, useStoreDispatch } from '../../context/StoreContext'
import { getCategories, updateSelectedCategory } from '../../actions/actions'

export default function CategoryFilter() {
	const store = useStore()
	const dispatch = useStoreDispatch()

	useEffect(() => {
		if (!store.successCategories) {
			getCategories(dispatch)
		}
	}, [dispatch, store.successCategories])

	const onChangeValue = e => {
		updateSelectedCategory(dispatch, e.target.value)
	}

	const categoryOptions = store.categories.map(category => (
		<option key={category} value={category}>
			{category}
		</option>
	))

	return (
		<select
			className='form-select flex-shrink-0'
			onChange={e => onChangeValue(e)}
			value={store.selectedCategory}
		>
			<option value='all'>All categories</option>
			{categoryOptions}
		</select>
	)
}
