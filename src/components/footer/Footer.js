import GithubIcon from '../icons/GithubIcon'
import LinkedInIcon from '../icons/LinkedInIcon'
import MailIcon from '../icons/MailIcon'
import './styles.scss'

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className='footer container'>
			<div className='footer-container border-top'>
				<div className='footer-icons'>
					<a
						href='https://github.com/Ricardo-V-V'
						target='_blank'
						rel='noreferrer'
					>
						<GithubIcon />
					</a>
					<a
						href='mailto:ricvillalobosv@gmail.com'
						target='_blank'
						rel='noreferrer'
					>
						<MailIcon />
					</a>
					<a
						href='https://www.linkedin.com/in/ricardo-villalobos'
						target='_blank'
						rel='noreferrer'
					>
						<LinkedInIcon />
					</a>
				</div>
			</div>
			<p className='footer-copyright'>
				© {year} <a href='https://ricardo-v-v.github.io'>Ricardo Villalobos</a>
				.
			</p>
		</footer>
	)
}
