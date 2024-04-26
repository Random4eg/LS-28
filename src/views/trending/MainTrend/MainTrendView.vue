<script>
// // MainTrend.jsx
// import PropTypes from 'prop-types'
// import '/src/pages/trending/MainTrend/MainTrend.scss'
// import { StarIcon } from '/src/components/../shared/icons/StarIcon'

// export const MainTrend = ({ activeFilm }) => {
// 	if (!activeFilm) {
// 		return null
// 	}

// 	const { title, image, year, genre, playback, description, star } = activeFilm
// MainTrend.propTypes = {
// 	activeFilm: PropTypes.shape({
// 		title: PropTypes.string.isRequired,
// 		image: PropTypes.string.isRequired,
// 		year: PropTypes.number.isRequired,
// 		genre: PropTypes.string.isRequired,
// 		playback: PropTypes.string.isRequired,
// 		description: PropTypes.string.isRequired,
// 		star: PropTypes.number.isRequired
// 	}).object
// }
</script>
<template>
	

		<div class='mt-box'>
			<div class='print'>
				<img class='print' src={image} alt={title} />
			</div>
			<div class='trend-box'>
				<div class='title-star'>
					<div class='title'>{title}</div>
					<div class='star'>
						<StarIcon /> {star}
					</div>
				</div>
				<div class='data'>
					<div class='year'>{year}</div>
					<div class='genre'>{genre}</div>
					<div class='playback'>{playback}</div>
				</div>
				<div class='description'>{description}</div>
				<div class='btn'>
					<button class='home__btn'>Watch now</button>
					<button class='biglike'>likeIcon</button>
				</div>
			</div>
		</div>
</template>
