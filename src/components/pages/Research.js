import image from "../../images/layered-peaks-dark.svg";
import React from 'react';
import './Research.css'

const Reasearch = () => {
	return (
		<div className="research-container">
            <img src = { image } alt="polygons on a off-white background" id="rsrch-img" />
            <h1>Explanation and Overview</h1>
            <p>Monochromacy—Rod monochromats, or complete achromats, are truly “color blind” since they cannot distinguish any hues (e.g., blue, green, yellow and red). They see only different degrees of lightness. For them, the world appears to be shades of gray, black and white. They also have poor visual acuity, aversion to bright light and nystagmus (an involuntary, rapid movement of the eyes).</p>
			<p>To have rod monochromacy, someone must inherit a gene for the disorder from both parents. This condition occurs in approximately 1 in 30,000 of the population.</p>
			<div></div>
			<p>Dichromacy is a less severe form of color defect than monochromacy. Dichromats can tell some hues apart. Dichromacy is divided into three types: protanopia, deuteranopia and tritanopia.</p>
			<div></div>
			<p>Protanopia and deuteranopia are red-green defects. Persons with red-green defects have difficulty distinguishing between reds, greens and yellows but can discriminate between blues and yellows. Protanopes often can name red and green correctly because green looks lighter to them than red.</p>
			<p>Males have red-green defects if they inherit a defective gene from their mother. Affected males pass the defective gene to all of their daughters but none of their sons. Females who inherit only one defective gene are carriers of that gene. Females who inherit the gene for red-green defect from both parents are affected.</p>
			<div></div>
			<p>Hereditary tritanopia is a blue-yellow defect. Persons with blue-yellow defects cannot see the difference between blues and yellows but can distinguish between reds and greens. Tritanopia is somewhat rare (affecting between 1 and 15,000 and 1 in 50,000) and occurs equally in both sexes. Triatnopes usually have fewer problems in performing everyday tasks than do those with red-green dichromacy.</p>
			<p>Anomalous Trichromacy—The ability of anomalous trichromats to distinguish between hues is better than dichromats but still not normal. Red-green anomalous trichromacy is subdivided into protanomaly and deuteranomaly. Both types are inherited in the same way as for red-green dichromacy. The severity can range from mild to extreme. Some persons with the mildest forms may not even realize their color vision is abnormal.</p>
			<p>A third type of anomalous trichromacy is tritanomaly. This condition is more often acquired than inherited.”</p>
			<div></div>
			<h3>In short:</h3>
			<p>Monochromacy: no colour vision, sees in black and white, often accompanied by other problems, very rare</p>
			<p>Idea: would prolly check how much value (lightness of a colour) there are between image colours</p>
			<div></div>
			<p>Dichromacy vs anomalous trichromacy:</p>
			<p>Both are split into three categories, deuter, proto, and trita</p>
			<p>Basically, dichromacy is full colour blindness of the specific variant, while anomalous trichromacy is a less severe form, anomalous trichromacy appears in a range from very mild colour vision anomaly to severe</p>
			<div></div>
			<h3>Dichromacy:</h3>
			<p>Protonopia and Deuteranopia: both are red-green colour blindness, proto comes from red cones while deuter comes from green. Both have trouble distinguishing reds, greens, and yellows, but can distinguish blues and yellows. To protonopes, green looks lighter than red</p>
			<p>Idea: check value differences between shades of green, red, and yellow on image</p>
			<p>Tritanopia: Blue yellow colour blindness, comes from blue cones. Rare, usually causes less issues than the others. Can distinguish reds and greens, but not blues and yellows.</p>
			<p>Idea: check value differences between blues and yellows of image</p>
			<p>Deuteranomaly, protanomaly, tritanomaly: less severe forms of above, no need to add categories for these as they are less severe versions of above, and may be more work than we would want, because they all come in a range"</p>
			<div></div>
            <p>This is our implementation of a web application where all can upload an image and our application will scan it and report how accessible the image is for different types of color-blindess, based on user testing. Our application will give the image a rating for Monochromacy and the three variations of Dichromacy. It will also explain how to improve the ratings for each, and link to background information on colour blindness.</p>
    	</div>
		);
	};
	
	export default Reasearch;

	/* To add to this page: 

		

		*/
