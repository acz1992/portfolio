import React from "react";
import SkillsArea from "./SkillsArea";

const skillsAreas = [
	{ index: 1, name: "frontend", title: "Frontend" },
	{ index: 2, name: "backend", title: "Backend" },
	{ index: 3, name: "misc", title: "Misc" },
];

const SkillsTab = () => {
	return (
		<div className="flex flex-col justify-center gap-1">
			{skillsAreas.map((skillsArea) => (
				<SkillsArea
					key={skillsArea.index}
					name={skillsArea.name}
					title={skillsArea.title}
				/>
			))}
		</div>
	);
};

export default SkillsTab;
