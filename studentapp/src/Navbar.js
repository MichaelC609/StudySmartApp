import '../src/Navbar.css'

function Navbar()
{
	return(
		<>
			<header>
				<h1>StudySmart</h1>
				<nav>
					<ul className="navLinks">
						<li><a href="">Home</a></li>
						<li><a href="#">Planning</a></li>
						<li><a href="#">Procrastination</a></li>
						<li><a href="#">Revision</a></li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Navbar