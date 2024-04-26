<script setup>
// import { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
// import '/src/shared/ui/Film/Film.scss'
// import { Likeicon } from '/src/components/icons/Likeicon'
// import { DisLikeicon } from '/src/components/icons/DisLikeicon'

// export const Film = ({ film, toggleFavorite, toggleActiveFilm }) => {
// 	const [isFavorited, setisFavorited] = useState(film.isFavorited)

// 	const handleLike = () => {
// 		toggleFavorite(film.id)
// 		setisFavorited(!isFavorited)
// 	}

// 	const handleFilmClick = () => {
// 		toggleActiveFilm && toggleActiveFilm(film)
// 	}

// 	useEffect(() => {
// 		setisFavorited(film.isFavorited)
// 	}, [film.isFavorited])
</script>
<template>
		<!-- <div
			 class={`film ${isFavorited ? 'isFavorited' : ''}`}
			style={{
				backgroundImage: `url(${film.image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
			onClick={handleFilmClick}
		> -->
			<div class='checkpoint'>
				<label>
					<button class='light' onClick={handleLike}>
						{isFavorited ? <Likeicon /> : <DisLikeicon />}
					</button>
				</label>
			</div> -->
			<div class='film-info'>
				<div class='film-title'>{film.title}</div>
				<div class='film-details'>
					<div class='film-year'>{film.year}</div>
					<div class='film-genre'>{film.genre}</div>
				</div>
			</div>
		<!-- </div> -->
</template>

Film.propTypes = {
	film: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		year: PropTypes.string.isRequired,
		genre: PropTypes.string.isRequired,
		isFavorited: PropTypes.bool.isRequired
	}).isRequired,
	toggleFavorite: PropTypes.func.isRequired,
	toggleActiveFilm: PropTypes.func
}
