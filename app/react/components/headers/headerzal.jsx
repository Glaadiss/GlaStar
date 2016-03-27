import React from 'react';


export default class HeaderZal extends React.Component {
	render () {
		const userName = this.props.userName;
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
		                				<a href="#"> Hejo {userName} </a>
		                		</li>
		                    <li>
		                        <a href="/users"> Lista userow </a>
		                    </li>	
		                    <li>
		                        <a href="/"> Blogi</a>
		                    </li>		                
		                    <li>
		                        <a href="#">menu1</a>
		                    </li>
		                    <li>

		                        <a data-method="delete" href="/users/sign_out" rel="nofollow">Logout</a>
		                    </li>
		                </ul>
		            </div>
		        </div>
		    </nav>

			);
	}
}




