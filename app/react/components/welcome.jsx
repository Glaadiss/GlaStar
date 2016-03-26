import React from 'react'

class Welcome extends React.Component {
	render() {
		return(
		<div>
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
		                        <a href="users/sign_up">Sign up</a>
		                    </li>
		                    <li>
		                        <a href="users/sign_in">Sign in</a>
		                    </li>
		                </ul>
		            </div>
		        </div>
		    </nav>
	    
	    <div className="container">

	        
	        <div className="row">
	            <div className="col-md-12 bgpicture">
	            	<div className="text-center napis">
						<h1>GlarStar Company</h1>
		                <p>Chcesz zrobić sobie bloga? No to dawej synu!</p>
		                <a className="btn btn-primary btn-lg" href="users/sign_up">Sign up!</a>
	                </div>

	            </div>
	            
	        </div>
	        

	        

	        <div className="row">
	            <div className="col-lg-12">
	                <div className="well text-center">
	                    Najlepsze miejsce do blogowania i dzielenia się z innymi swoją pasją!
	                </div>
	            </div>
	            
	        </div>
	        

	        
	        <div className="row">
	            <div className="col-md-4">
	                <h2>Cos 1</h2>
	                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
	                <a className="btn btn-default" href="#">More Info</a>
	            </div>
	            
	            <div className="col-md-4">
	                <h2>Cos 2</h2>
	                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
	                <a className="btn btn-default" href="#">More Info</a>
	            </div>
	            
	            <div className="col-md-4">
	                <h2>cos 3</h2>
	                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
	                <a className="btn btn-default" href="#">More Info</a>
	            </div>
	            
	        </div>
	      

		        <footer>
		            <div className="row">
		                <div className="col-lg-12">
		                    <p>Copyright &copy; GlarStar Company 2016 </p>
		                </div>
		            </div>
		        </footer>
		    </div>
		   
	    </div>
	  );
	}
}

export default Welcome;