import React from 'react';

export default class Header extends React.Component {
	render () {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
		        <div className="container">
		            <div className="navbar-header">
		                <a className="navbar-brand" href="#">
		                    <img src="http://placehold.it/150x50&text=Logo" alt="gfg"></img>
		                </a>
		            </div>
		            <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
		                <ul className="nav navbar-nav">

		                    <li>
		                        <a href="/users/sign_up">Sign up</a>
		                    </li>
		                    <li>
		                        <a href="/users/sign_in">Sign in</a>
		                    </li>
		                </ul>
		            </div>
		        </div>
		    </nav>

			);
	}
}