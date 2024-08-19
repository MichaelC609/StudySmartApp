import { useState } from 'react';
import '../src/Signup.css'
import axios from 'axios';

function Signup()
{
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	
	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('', {name, email, password})
		.then(result => console.log(result))
		.catch(err => console.log(err));
	}

	return(
		<>
			<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
			<div className='wrapper'>
				<h1>Create an account!</h1>	

				<div className='input-box'>
						<input type='text' 
						placeholder='Username' required 
						onChange={(e) => setEmail(e.target.value)}
						/>
						<i class='bx bx-user'></i>
					</div>

				<div className='input-box'>
					<input type='password' 
					placeholder='Password' required 
					onChange={(e) => setPassword(e.target.value)}
					/>
					<i class='bx bxs-lock-alt' ></i>
				</div>

				<button className='btn' type='submit'> Register </button>

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