import { Link } from "react-router-dom"
import { LogoIcon } from "/src/components/../shared/icons/Logo/LogoIcon"


export const Login = () => {
  return (
		<div class='box'>
			<div class='login'>
				<LogoIcon />
				<div class='login__desc'>Enjoy the newest movies</div>
				<Link to='/home'>
					<button class='login-button'>Log in</button>
				</Link>
				<div>
					No account? <span> Sign up</span>
				</div>
			</div>
		</div>
	)
}
