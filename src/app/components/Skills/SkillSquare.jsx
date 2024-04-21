import React from "react";

const SkillSquare = ({ image }) => {
	return (
		<div className="relative">
			<div
				className="relative flex flex-row h-14 bg-white aspect-square border-[#33353F] border rounded-md filter brightness-0 saturate-100 invert sepia-20 hue-rotate-355 brightness-112 contrast-100 transform transition-transform duration-300 hover:scale-105 hover:delay-100"
				style={{
					background: `url(${image})`,
					backgroundSize: "cover",
				}}
			>
				{/* Overlay */}
				<div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
			</div>
		</div>
	);
};

export default SkillSquare;
