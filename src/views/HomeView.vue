<script setup>
// import { Watching } from './Watching/Watching.vue'
// import { Header } from '/src/components/shared/ui/Header/Header'
// import '/src/pages/home/Home.scss'
// import { BigDislikeIcon } from '/src/components/shared/icons/BigDislikeIcon'
// import { BigLikeIcon } from '/src/components/shared/icons/BigLikeIcon'
// import { useState } from 'react'
// import { Film } from '/src/components/shared/ui/Film/Film'
// import { filmsData, toggleFavorite } from '/src/components/database/films'
// export const Home = () => {
// 	const [isFavorited, setIsFavorited] = useState(false)

// 	const toggleLike = () => {
// 		setIsFavorited(!isFavorited)
// 	}

// 	const likeIcon = isFavorited ? <BigLikeIcon /> : <BigDislikeIcon />
// 	const listItems = filmsData.map(film => (
// 		<Film key={film.id} film={film} toggleFavorite={toggleFavorite} />
// 	))
</script>

<template>
  <main>
  			<section class='home'>
				<div class='home-container'>
					<Header />
					<div class='card'>
						<div class='title'>Insider</div>
						<div class='desc'>2022 | Comedy horror | 1 Season</div>
						<div class='btn'>
							<button class='home__btn'>Watch now</button>
							<button class='biglike' onClick={toggleLike}>
								{likeIcon}
							</button>
						</div>
					</div>
				</div>
				<a href="{Trending}"  class='track'>
					Trending
				</a>
				<div class='trending-list'>{listItems}</div>

				<Watching />
			</section>
  </main>
</template>
<style scoped>

.home {
	padding-left: 32rem;
}
.home-container {
	background: url('/src/assets/Homescreen.png');
	background-size: cover;
	background-position: center;
}
.card {
	margin-top: 100rem;
	padding-bottom: 53rem;
}
.title {
	font-weight: 600;
	font-size: 48rem;
	line-height: 100%;
	margin-bottom: 20rem;
}
.desc {
	font-weight: 400;
	font-size: 14rem;
	line-height: 143%;
	margin-bottom: 20rem;
}
.btn {
	display: flex;
	align-items: center;
	gap: 16rem;
}
.home__btn {
	border-radius: 14rem;
	padding: 17rem 24rem;
	color: var(--white);
	background: var(--purple);
	border: 0;
}
@media (min-width: 1024px) {

}
</style>