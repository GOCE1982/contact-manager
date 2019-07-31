import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaHome as Home } from 'react-icons/fa';
import { FaPlus as Add } from 'react-icons/fa';
import { FaQuestion as About } from 'react-icons/fa';

const Header = (props) => {
	const { branding } = props;
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
			<div className="container">
				<a className="navbar-brand" href="/">{branding}</a>
				<div>
					<ul className="nav mr-auto">
						<li className="nav-item">
							<Link to="/" className="navbar nav-link"><Home />Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact/add" className="navbar nav-link"><Add />Add</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="navbar nav-link"><About />About</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

Header.defaultProps = {
	branding: 'Contact Manager'
};

Header.propTypes = {
	branding: PropTypes.string.isRequired
};

export default Header;