import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import img1 from '../assets/pic1.jpeg';
import img2 from '../assets/pic2.jpeg';
import img3 from '../assets/pic3.jpeg';
import img4 from '../assets/pic4.jpeg';
import img5 from '../assets/pic5.jpeg';
import img6 from '../assets/pic6.jpeg';
import img8 from '../assets/pic8.jpeg';
import img9 from '../assets/pic9.jpeg';
import img11 from '../assets/pic11.jpeg';
import img12 from '../assets/pic12.jpeg';


const memories = [
  { src: img2, caption: "Our first picture together!" },
  { src: img3, caption: "I think it all started from here.. hmm?" },
  { src: img1, caption: "Not exactly.. From here??" },
  { src: img11, caption: "This was the first bloom in the spring!" },
  { src: img5, caption: "And I can't find anything more cute than this!" },
  { src: img6, caption: "This is the exact replica of US being US.. hehehhe!!" },
  { src: img9, caption: "And everybody zoomed in  here and i think, we got much closer after this!" },
  { src: img4, caption: "In the process... I luvvvv Icecream!!" },
  { src: img12, caption: "And will forever! And also adore him like this!!" },
  { src: img8, caption: "It's a pleasure or may be treasure having you.. And Yeahhh!! We love being together!!" },

];

const MemoriesSection = () => {
	return (
		<div className="memory-section-wrapper" id="memories">
		<h2 className="memories-title">Don't we look together so happy?</h2>

		<div className="memories-timeline">
			{memories.map((memory, index) => (
			<MemoryCard key={index} memory={memory} index={index} />
			))}
		</div>
		</div>
	);
};

const MemoryCard = ({ memory, index }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<motion.div
			ref={ref}
			className="memory-card"
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.8, delay: index * 0.2 }}
		>
		<img src={memory.src} alt={`Memory ${index + 1}`} />
		<p>{memory.caption}</p>
		</motion.div>
	);
};

export default MemoriesSection;
