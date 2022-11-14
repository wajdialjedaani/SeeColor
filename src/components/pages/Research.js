import image from "../../images/layered-peaks-dark.svg";
import React from 'react';
import './Research.css'

const Reasearch = () => {
	return (
		<div className="research-container">
            <img src = { image } alt="polygons on a off-white background" id="rsrch-img" />
           
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
