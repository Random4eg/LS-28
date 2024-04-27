<script setup >
import ComingIcon from '@/components/icons/ComingIcon..vue';
import ComunityIcon from '@/components/icons/ComunityIcon.vue';
import FavoritesIcon from '@/components/icons/FavoritesIcon.vue';
import HomeIcon from '@/components/icons/HomeIcon.vue';
import LogoIcon from '@/components/icons/Logo/LogoIcon.vue';
import LogoutIcon from '@/components/icons/LogoutIcon.vue';
import SettingsIcon from '@/components/icons/SettingsIcon.vue';
import SocialIcon from '@/components/icons/SocialIcon.vue';
import TrendingIcon from '@/components/icons/TrendingIcon.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
	<div class='sidebar'>
		
			<div class='nav'>
				<div class='sidebar__page'>		
					<LogoIcon />		
				<RouterLink to="/home"> <HomeIcon/>Home</RouterLink>
    			<RouterLink to="/favorites"><FavoritesIcon />Favorites</RouterLink>
   				<RouterLink to="/trending"><TrendingIcon/>Trending</RouterLink>
				<div><ComingIcon/> Coming soon</div>			
				</div>
				<div class='sidebar__social'>		
						<div><ComunityIcon />Community</div>				
						<div><SocialIcon /> Social</div>					
				</div>
				<div class='sidebar__set'>		
						<div><SettingsIcon /> Settings</div>				
						<div><LogoutIcon /> Logout</div>					
				</div>
			</div>
		</div>
	</template>
	<style scoped>
	.sidebar {
	display: flex;
	padding: 40px;
	height: 100%;
	align-items: center;
	/* box-shadow: 2px 0px 90px rgba(97, 0, 194, 0.4); */
	
}
.nav {
	
	font-weight: 700;
	font-size: 16rem;
	line-height: 150%;
}
.sidebar__page {
	display: flex;
	flex-direction: column;
	margin-top: 58rem;
	margin-bottom: 100rem;
}
.sidebar__social {
	margin-bottom: 200rem;
}


	
	</style>