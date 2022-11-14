import image from "../../images/layered-peaks-dark.svg";
import React from 'react';
import './Research.css'

const Reasearch = () => {
	return (
		<div className="research-container">
            <img src = { image } alt="polygons on a off-white background" id="rsrch-img" />
			<p>Monochromacy: people with this condition cannot distinguish colour at all. This condition is very rare.</p>
			<p>Dichromacy: People with this condition can tell some colours apart, but are not able to distinguish certain hues. Dichromacy is split into Protanopia (red), Deuteranopia ( green), and Tritanopia (blue). Although each of those are focused mainly on one colours, they all change the way every colour looks, and certain hues can be hard or impossible to tell apart. Protanopia and Deuteranopia cause trouble with reds, greens, and yellows. Tritanopia causes trouble with blues and yellows.</p>
            <p>Anomalous Trichromacy: This condition is split into Tritanomaly, Protanomaly, and Deuteranomaly. Trichromats can still have difficulty distinguishing colour, but not as much as dichromats. This condition can range from very mild to severe. </p>
			<h3>Sources:</h3>
			<a href="https://chicago.medicine.uic.edu/departments/academic-departments/ophthalmology-visual-sciences/our-department/media-center/eye-facts/color-blindness/">Chicago Medicine UIC</a>
			<a href="https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=134&contentid=526">URMC Rochester</a>
			<a href="https://www.sunyopt.edu/news/what-it-means-to-be-color-blind-and-what-you-can-do-about-it/">Sunyopt</a>
			<a href="https://contrastchecker.com/">Contrast Checker</a>
			<a href="https://webaim.org/resources/contrastchecker/">WebAIM Contrast Checker</a>
    	</div>
		);
	};
	
	export default Reasearch;

	/* To add to this page: 

		

		*/
