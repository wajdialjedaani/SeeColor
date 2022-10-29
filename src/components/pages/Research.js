import image from "../../images/unt-library.jpeg";

const Reasearch = () => {

	return (
		<img src={image} alt="unt willis library"/>
		);
	};
	
	export default Reasearch;

	/* To add to this page: 

		<div className='research-container'>
			
            <h1>Good explanation and overview</h1>
			<p><a href="https://chicago.medicine.uic.edu/departments/academic-departments/ophthalmology-visual-sciences/our-department/media-center/eye-facts/color-blindness/"></a></p>
			<p><a href=https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=134&contentid=526"></a></p>
			<p><a href=https://www.sunyopt.edu/news/what-it-means-to-be-color-blind-and-what-you-can-do-about-it/"></a></p>
			<p><a href=https://chicago.medicine.uic.edu/departments/academic-departments/ophthalmology-visual-sciences/our-department/media-center/eye-facts/color-blindness/"></a></p>
			<p>Monochromacy—Rod monochromats, or complete achromats, are truly “color blind” since they cannot distinguish any hues (e.g., blue, green, yellow and red). They see only different degrees of lightness. For them, the world appears to be shades of gray, black and white. They also have poor visual acuity, aversion to bright light and nystagmus (an involuntary, rapid movement of the eyes).
			To have rod monochromacy, someone must inherit a gene for the disorder from both parents. This condition occurs in approximately 1 in 30,000 of the population.
			Dichromacy is a less severe form of color defect than monochromacy. Dichromats can tell some hues apart. Dichromacy is divided into three types: protanopia, deuteranopia and tritanopia.
			Protanopia and deuteranopia are red-green defects. Persons with red-green defects have difficulty distinguishing between reds, greens and yellows but can discriminate between blues and yellows. Protanopes often can name red and green correctly because green looks lighter to them than red.
			Males have red-green defects if they inherit a defective gene from their mother. Affected males pass the defective gene to all of their daughters but none of their sons. Females who inherit only one defective gene are carriers of that gene. Females who inherit the gene for red-green defect from both parents are affected.
			Hereditary tritanopia is a blue-yellow defect. Persons with blue-yellow defects cannot see the difference between blues and yellows but can distinguish between reds and greens. Tritanopia is somewhat rare (affecting between 1 and 15,000 and 1 in 50,000) and occurs equally in both sexes. Triatnopes usually have fewer problems in performing everyday tasks than do those with red-green dichromacy.
			Anomalous Trichromacy—The ability of anomalous trichromats to distinguish between hues is better than dichromats but still not normal. Red-green anomalous trichromacy is subdivided into protanomaly and deuteranomaly. Both types are inherited in the same way as for red-green dichromacy. The severity can range from mild to extreme. Some persons with the mildest forms may not even realize their color vision is abnormal.
			A third type of anomalous trichromacy is tritanomaly. This condition is more often acquired than inherited.”
			In short:
			Monochromacy: no colour vision, sees in black and white, often accompanied by other problems, very rare
			Idea: would prolly check how much value (lightness of a colour) there are between image colours
			
			Dichromacy vs anomalous trichromacy:
			Both are split into three categories, deuter, proto, and trita
			Basically, dichromacy is full colour blindness of the specific variant, while anomalous trichromacy is a less severe form, anomalous trichromacy appears in a range from very mild colour vision anomaly to severe
			
			Dichromacy:
			Protonopia and Deuteranopia: both are red-green colour blindness, proto comes from red cones while deuter comes from green. Both have trouble distinguishing reds, greens, and yellows, but can distinguish blues and yellows. To protonopes, green looks lighter than red
			Idea: check value differences between shades of green, red, and yellow on image
			Tritanopia: Blue yellow colour blindness, comes from blue cones. Rare, usually causes less issues than the others. Can distinguish reds and greens, but not blues and yellows.
			Idea: check value differences between blues and yellows of image
			
			Deuteranomaly, protanomaly, tritanomaly: less severe forms of above, no need to add categories for these as they are less severe versions of above, and may be more work than we would want, because they all come in a range
			</p>
    	</div>

		*/