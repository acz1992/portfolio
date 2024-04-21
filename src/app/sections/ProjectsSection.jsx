"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "../components/Projects/ProjectsCard";
import ProjectTag from "../components/Projects/ProjectTag";
import { motion, useInView } from "framer-motion";
import projectsData from "../../data/projects.json"; // Import projectsData

const cardVariants = {
	initial: { y: 50, opacity: 0 },
	animate: { y: 0, opacity: 1 },
};

export const ProjectsSection = () => {
	const [tag, setTag] = useState("All");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

	return (
		<section
			id="projects"
			className="projects pt-6 border-t border-[#33353F]"
		>
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				My Projects
			</h2>
			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				<ProjectTag
					onClick={handleTagChange}
					name="All"
					isSelected={tag === "All"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Web"
					isSelected={tag === "Web"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="App"
					isSelected={tag === "App"}
				/>
			</div>
			<ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ProjectsCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							tags={project}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default ProjectsSection;
