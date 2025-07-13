import React from 'react';
import { motion } from 'framer-motion';

const FinalNote = () => {
  return (
   <motion.div
	style={{ textAlign: 'center' }}
	initial={{ opacity: 0, y: 30 }}
	whileInView={{ opacity: 1, y: 0 }}
	transition={{ duration: 1, delay: 1 }}
>
	<h2 style={{ marginBottom: 0 }}>Did you heard?? ~jive kawega, karagi ranjhave!!✨💝</h2>

	<small style={{color: 'aqua'}}>(if not just double-tap on the screen 😄)</small>
	<p>Ya!! this will always be my koshish. Thank you for being part! indeed it's a pleasure being around! Apart from all this,
		you will always be in my praying, praying for the best coming on your ways!!
		May you receive the love, patience and happiness which you always spread around!!

		
	</p>
	<p>Sukoon dene wale ko, Sukoon mile! <br />
		Pyar dene wala ko pyar, <br />
		khusiyan bantne wale ko khushi, <br />
		Bas itni si dua hai!!</p>
</motion.div>

  );
};

export default FinalNote;
