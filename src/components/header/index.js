import NavBar from './Navbar'
import TopBar from './TopBar'
import './styles.scss'

export default function Header() {
	return (
		<header>
			<TopBar />
			<NavBar />
		</header>
	)
}
