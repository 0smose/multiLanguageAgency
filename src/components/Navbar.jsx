import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div>
					<nav>
            <ul style={{listStyle:"none"}}>
							<li>
								<Link to='/about'>About</Link>
							</li>
							<li>
								<Link to='/works'>Works</Link>
							</li>
							<li>
								<Link to='/'>Home</Link>
							</li>
						</ul>
					</nav>
        </div>
    )
}

export default Navbar;