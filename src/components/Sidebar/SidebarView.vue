<script setup >
import { LogoIcon } from "/src/components/icons/Logo/LogoIcon"
import { FavoritesIcon } from "/src/components/icons/FavoritesIcon"
import { TrendingIcon } from "/src/components/icons/TrendingIcon"
import { ComingIcon } from "/src/components/icons/ComingIcon"
import { ComunityIcon } from "/src/components/icons/ComunityIcon"
import { SocialIcon } from "/src/components/icons/SocialIcon"
import { SettingsIcon } from "/src/components/icons/SettingsIcon"
import { LogoutIcon } from "/src/components/icons/LogoutIcon"
import HomeIcon from "../icons/HomeIcon.vue"
</script>

<template>
		<div class='side-bar'>
			<LogoIcon />
			<div class='nav'>
				<div class='sidebar__page'>
					<li>
						
						<a href='/Home'>
							<HomeIcon /> Home
						</a>
					</li>
					<li>
						<a href='/Favourites'>
							<FavoritesIcon /> Favourites
						</a>
					</li>
					<li>
						<a href='/Trending'>
							<TrendingIcon /> Trending
						</a>
					</li>
					<li>
						<a href='/'>
							<ComingIcon /> Coming soon
						</a>
					</li>
				</div>
				<div class='sidebar__social'>
					<li>
						<a href='/'>
							<ComunityIcon /> Community
						</a>
					</li>
					<li>
						<a href='/'>
							<SocialIcon /> Social
						</a>
					</li>
				</div>
				<div class='sidebar__set'>
					<li>
						<a href='/'>
							<SettingsIcon /> Settings
						</a>
					</li>
					<li>
						<a href='/'>
							<LogoutIcon /> Logout
						</a>
					</li>
				</div>
			</div>
		</div>
	<template/>