<script>
// import { useState } from 'react'
// import { Header } from '/src/components/shared/ui/Header/Header'
// import { Film } from '/src/components/shared/ui/Film/Film'
// import { filmsData } from '/src/components/database/films'
// import { MainTrend } from './MainTrend/MainTrend.vue'

// export const Trending = () => {
// 	const [activeFilm, setActiveFilm] = useState(null)
// 	const [listOpacity, setListOpacity] = useState(0.3)
// 	const [isClicked, setIsClicked] = useState(false)

// 	const handleToggleActiveFilm = film => {
// 		setActiveFilm(film)
// 		film.isFavorited = true
// 	}

// 	const handleToggleFavorite = () => {
// 		setActiveFilm(null)
// 	}

// 	const handleListClick = () => {
// 		setListOpacity(1)
// 		setIsClicked(true)
// 	}

// 	const handleListHover = () => {
// 		setListOpacity(0.3)
// 	}

// 	const handleListLeave = () => {
// 		setListOpacity(1)
// 		setIsClicked(false)
// 	}

// 	const listItems = filmsData.map(film => (
// 		<Film
// 			key={film.id}
// 			film={film}
// 			toggleFavorite={handleToggleFavorite}
// 			toggleActiveFilm={handleToggleActiveFilm}
// 			style={{ opacity: listOpacity }}
// 		/>
// 	))
</script>
<template>
				<div class='trending'>
				<div class='trending-title'>Trending at this moment</div>
				<div class=list-box>
					<div class='trending-list'>{listItems}</div>
				</div>
			</div>
			<MainTrend activeFilm={activeFilm} />
</template >
