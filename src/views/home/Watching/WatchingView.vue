import { useState } from 'react'

import './Watching.scss'
import { BigLikeIcon } from '/src/components/../shared/icons/BigLikeIcon'
import { BigDislikeIcon } from '/src/components/../shared/icons/BigDislikeIcon'

export const Watching = () => {
	const [isFavoritedArray, setIsFavoritedArray] = useState([
		false,
		false,
		false
	])

	const toggleLike = index => {
		const newArray = [...isFavoritedArray]
		newArray[index] = !newArray[index]
		setIsFavoritedArray(newArray)
	}

	return (
		<div>
			{' '}
			<section class='watch-trend'>
				Continue watching
				<div class='watch-box'>
					<div class='watch-item'>
						<label class='watch-like'>
							<button class='biglike' onClick={() => toggleLike(0)}>
								{isFavoritedArray[0] ? <BigLikeIcon /> : <BigDislikeIcon />}
							</button>
						</label>
					</div>
					<div class='watch-item'>
						<label class='watch-like'>
							<button class='biglike' onClick={() => toggleLike(1)}>
								{isFavoritedArray[1] ? <BigLikeIcon /> : <BigDislikeIcon />}
							</button>
						</label>
					</div>
					<div class='watch-item'>
						<label class='watch-like'>
							<button class='biglike' onClick={() => toggleLike(2)}>
								{isFavoritedArray[2] ? <BigLikeIcon /> : <BigDislikeIcon />}
							</button>
						</label>
					</div>
				</div>
			</section>
		</div>
	)
}
