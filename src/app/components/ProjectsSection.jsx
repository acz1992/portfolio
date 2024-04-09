"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
	{
		id: 1,
		title: "MJBeers Photography",
		description: "Photography Portfolio Site",
		image: "/images/projects/mitchphotography.png",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/acz1992/mjbeers_photography",
		previewUrl: "https://mjbeers-photography.vercel.app/",
	},
	{
		id: 2,
		title: "Task Manager App",
		description: "Organise the overwhelming",
		image: "/images/projects/taskmanager.png",
		tag: ["All", "App"],
		gitUrl: "https://github.com/acz1992/task_manager/",
		previewUrl: "https://portfolio-website-three-xi-41.vercel.app/",
	},
	{
		id: 3,
		title: "Blickfang Blumen",
		description: "Custom floral arrangements",
		image: "/images/projects/kateblickfang.png",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/acz1992/blickfang-blumen",
		previewUrl: "https://blickfang-blumen.vercel.app/",
	},
	{
		id: 4,
		title: "Movie Booking App",
		description: "Book films seamlessly",
		image: "/images/projects/4.png",
		tag: ["All", "App"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 5,
		title: "Hamish's Outdoor Services",
		description: "For all your outdoor needs",
		image: "/images/projects/5.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 6,
		title: "Listfull",
		description: "Simplify your weekly shop!",
		image: "/images/projects/6.png",
		tag: ["All", "App"],
		gitUrl: "/",
		previewUrl: "/",
	},
];

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
