export default function NavBar() {
	return (
		<div className='container'>
			<nav className='navbar navbar-light bg-white'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='/'>
						Navbar
					</a>
					<form className='d-none d-md-flex flex-grow-1 mx-3'>
						<input
							className='form-control me-2'
							type='search'
							placeholder='Search'
							aria-label='Search'
						/>
						<button className='btn btn-outline-success' type='submit'>
							Search
						</button>
					</form>
					<div className='navbar-tool'>
						<a className='navbar-tool-icon-box bg-secondary' href='/'>
							<span className='navbar-tool-label bg-primary'>4</span>
							CA
						</a>
						<a className='navbar-tool-text' href='/'>
							<small>My Cart</small>$1,247.00
						</a>
					</div>
				</div>
			</nav>
		</div>
	)
}
