import { useState } from 'react'
import { SearchIcon } from '/src/components/icons/SearchIcon'
import { BellIcon } from '/src/components/icons/BellIcon'

export const Header = () => {
	const [isSearchOpen, setIsSearchOpen] = useState(false)

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen)
	}

	return (
		<section class='header'>
			<div class='header__link'>
				<div>Movies</div>
				<div>Series</div>
				<div>Documentaries</div>
			</div>
			<div class='user__link'>
				<label class='search' onClick={toggleSearch}>
					<SearchIcon />
				</label>
				{isSearchOpen && (
					<div class='search-input'>
						{/* Place your input field here */}
						<input type='text' placeholder='Search...' />
					</div>
				)}
				<div class='reminder'>
					<BellIcon />
				</div>
				<div class='image'>
					<img src='/src/assets/UserIcon.png' alt='user' />
				</div>
				<div class='name'>Tetiana</div>
			</div>
		</section>
	)
}
