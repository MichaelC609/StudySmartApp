import { useState } from 'react';
import '../src/Signup.css'
import axios from 'axios';

function Signup()
{
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	
	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('https://localhost:3001/user', {email, password})
		.then(result => console.log(result))
		.catch(err => console.log(err));
	}

	return(
		<>
			<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
			<div className='wrapper'>
				<h1>Create an account!</h1>	

				<form onSubmit={handleSubmit}>
					<div className='input-box'>
						<input type='text' 
						placeholder='Email' required 
						onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className='input-box'>
						<input type='password' 
						placeholder='Password' required 
						onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</form>
				

				<button className='btn' 
					type='submit'
				> 
					Register 
				</button>

				<div className='signUp-link'>
					<p>Already have an account?  
						<a href='#'> Log in here!</a>
					</p>
				</div>
			</div>
		</>
	);
}

export default Signup