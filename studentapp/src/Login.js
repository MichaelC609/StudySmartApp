import '../src/Login.css'

function Login()
{
	return(
		<>
		<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
			
			<div className='wrapper'>
				<h1>Login</h1>
				<form>
					<div className='input-box'>
						<input type='text' 
						placeholder='Username' required />
						<i class='bx bx-user'></i>
					</div>

					<div className='input-box'>
						<input type='password' 
						placeholder='Password' required />
						<i class='bx bxs-lock-alt' ></i>
					</div>

					<button className='btn' 
					type='submit'>Login</button>

					<div className='signUp-link'>
						<p>Don't have an account?  
							<a href='#'> Sign up here!</a></p>
					</div>
				</form>
			</div>
		</>
	);
}

export default Login;