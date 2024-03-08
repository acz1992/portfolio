"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-disc pl-2">
				<li>HTML5</li>
				<li>CSS3</li>
				<li>JavaScript</li>
				<li>TypeScript</li>
				<li>React</li>
				<li>Next.js</li>
				<li>Node.js</li>
				<li>Express.js</li>
				<li>Prisma</li>
				<li>Mongoose</li>
				<li>MongoDB</li>
				<li>JSON</li>
				<li>Figma</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pl-2">
				<li>Lancaster University</li>
				<li>DevHaus Academy</li>
			</ul>
		),
	},
	{
		title: "Certifications",
		id: "certifications",
		content: (
			<ul className="list-disc pl-2">
				<li>German Telc B2</li>
				<li>WSET 2 Wine Certification</li>
			</ul>
		),
	},
];

const AboutMe = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section className="text-white ">
			<div className="grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
				<Image
					src="/images/code-one.jpg"
					alt="Books and Laptop"
					width={500}
					height={500}
					className="h-full rounded-full"
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h1 className="text-4xl font-bold text-white mb-4">
						About Me
					</h1>
					<p className="text-base md:text-lg">
						I am a full stack web developer with a passion for
						creating interactive and responsive web applications. I
						have experience working with JavaScript, React, Redux,
						Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and
						Git. I am a quick learner and I am always looking to
						expand my knowledge and skill set. I am a team player
						and I am excited to work with others to create amazing
						applications.
					</p>
					<div className="flex flex-row justify-start mt-8">
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}
						>
							{" "}
							Skills{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}
						>
							{" "}
							Education{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("certifications")}
							active={tab === "certifications"}
						>
							{" "}
							Certifications{" "}
						</TabButton>
					</div>
					<div className="mt-8">
						{/* t is tab, cant redeclare  */}
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
