import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/we.jpeg";

const messages = [
  "~to the one who lives in my heart rentlessly 💖",
  "May we continue to celebrate each other like this forever!! 🌸",
];

const HeroSection = () => {
	return (
		<div
			className="hero-section"
			style={{
				backgroundImage: `url(${heroBg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				minHeight: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
			}}
		>
		<motion.div
			className="glass-card"
			initial={{ scale: 0.9, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ duration: 1.2, ease: "easeOut" }}
		>
			<motion.h1
				className="birthday-title"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4 }}
			>
			🎉 Happy Birthday 🎂
			</motion.h1>

			{messages.map((msg, i) => (
			<motion.p
				key={i}
				className={`hero-text-line ${i === 3 ? "main" : ""}`}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: i * 0.6 + 0.5 }}
			>
				{msg}
			</motion.p>
			))}

			<motion.div
				className="floating-heart"
				animate={{ y: [0, -20, 0] }}
				transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
				onClick={() => {
					const el = document.getElementById("memories");
					el?.scrollIntoView({ behavior: "smooth" });
				}}
				style={{ cursor: "pointer" }}
			>
			💗
			</motion.div>
		</motion.div>
		</div>
	);
};

export default HeroSection;
