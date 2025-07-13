import React from 'react';
import { motion } from 'framer-motion';

const FinalNote = () => {
  return (
    <motion.div
		className="text-center"
		initial={{ opacity: 0, y: 30 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 1, delay: 1 }}
    >
		<h2>You're not just special today — you're special always ✨</h2>
		<p>Thank you for being you. Forever grateful 💝</p>
    </motion.div>
  );
};

export default FinalNote;
