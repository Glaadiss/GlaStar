import React from 'react'

class Welcome extends React.Component {
	render() {
		return(

			<div id="banner">
				<div className="banner_content">
					<h1>GlarStar</h1>
					<p>Twoje blogi cos tam cos tam</p>
	    			<button>Click me</button>
				</div>

				<div id="testimonial">
					<div className="wrapper">
						<p className="quote">Najlepsza aplikacja blogowa w internetach</p>
						<p className="name">Marcin Starmach</p>
					</div>
				</div>

				<div id="callouts">
					<div className="callout_inner">
						<div className="wrapper"> 
							<div className="callout"> 
								<h2> Notes </h2>
								<p>SDFsfgdfgdgdfg</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			);
	}
}

export default Welcome;