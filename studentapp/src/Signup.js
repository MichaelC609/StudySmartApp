import '../src/Signup.css'

function Signup()
{
	return(
		<>
			<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
			<div className='wrapper'>
				<h1>Sign up!</h1>	

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
			</div>
		</>
	);
}

export default Signup