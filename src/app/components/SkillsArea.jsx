import React from "react";
import SkillSquare from "./SkillSquare";
import skillsDatas from "../../utils/skills";

const SkillsArea = ({ title, name }) => {
	const filteredSkills = skillsDatas.filter(
		(skillData) => skillData.area === name
	);

	return (
		<div className="flex mb-4">
			<div className="">
				<h3 className="text-center font-semibold text-1xl mb-2 font-lg">
					{title}
				</h3>
				<div className="flex flex-wrap gap-2 justify-center items-center">
					{filteredSkills.map((filteredSkill) => (
						<SkillSquare
							key={filteredSkill.id}
							image={filteredSkill.image}
							area={filteredSkill.area}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillsArea;
