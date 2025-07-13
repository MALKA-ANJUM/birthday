import React from 'react';
import { motion } from 'framer-motion';
import bg from '../assets/we.jpeg'; // replace with your background

const PopupOverlay = () => {
  return (
    <motion.div
		className="popup-hero"
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 1 }}
		style={{
			position: 'relative',
			height: '100vh',
			backgroundImage: `url(${bg})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center',
			padding: '30px',
      }}
    >
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5, duration: 1 }}
			style={{
			backgroundColor: 'rgba(255, 255, 255, 0.75)',
			padding: '40px',
			borderRadius: '20px',
			maxWidth: '700px',
			boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
			}}
		>
			<h2 style={{ fontFamily: 'Dancing Script', fontSize: '2.7rem', color: '#e91e63' }}>
			Happy birthday to the man who lives in my heart relentlessly.
			</h2>
			<p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
			May we continue to celebrate each other like this forever! 💞
			</p>
		</motion.div>
    </motion.div>
  );
};

export default PopupOverlay;
